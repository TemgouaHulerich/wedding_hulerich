type ServiceAccount = {
  client_email: string;
  private_key: string;
};

function encodeBase64Url(input: string | Uint8Array): string {
  const bytes = typeof input === 'string' ? new TextEncoder().encode(input) : input;
  let base64: string;

  if (typeof Buffer !== 'undefined') {
    base64 = Buffer.from(bytes).toString('base64');
  } else {
    let binary = '';
    for (const b of bytes) binary += String.fromCharCode(b);
    base64 = btoa(binary);
  }

  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function decodeBase64Utf8(base64: string): string {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(base64, 'base64').toString('utf-8');
  }
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const clean = pem
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '');

  if (typeof Buffer !== 'undefined') {
    const buf = Buffer.from(clean, 'base64');
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  }

  const binary = atob(clean);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

async function createGoogleAccessToken(credentials: ServiceAccount): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  };

  const encodedHeader = encodeBase64Url(JSON.stringify(header));
  const encodedPayload = encodeBase64Url(JSON.stringify(payload));
  const signingInput = `${encodedHeader}.${encodedPayload}`;

  const privateKeyPem = credentials.private_key.replace(/\\n/g, '\n');
  const key = await crypto.subtle.importKey(
    'pkcs8',
    pemToArrayBuffer(privateKeyPem),
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(signingInput));
  const assertion = `${signingInput}.${encodeBase64Url(new Uint8Array(signature))}`;

  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });

  const tokenText = await tokenResponse.text();
  let tokenJson: any = null;
  try {
    tokenJson = tokenText ? JSON.parse(tokenText) : null;
  } catch {
    tokenJson = null;
  }

  if (!tokenResponse.ok || !tokenJson?.access_token) {
    throw new Error(tokenJson?.error_description || tokenJson?.error || 'Failed to get Google access token.');
  }

  return tokenJson.access_token as string;
}

export async function writeToSheet(data: any[]) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
  const credentialsBase64 = process.env.GOOGLE_API_CREDENTIALS_BASE64;

  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEETS_ID is missing.');
  }

  if (!credentialsBase64) {
    throw new Error('GOOGLE_API_CREDENTIALS_BASE64 is missing.');
  }

  const credentials = JSON.parse(decodeBase64Utf8(credentialsBase64)) as ServiceAccount;
  const accessToken = await createGoogleAccessToken(credentials);

  const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(
    spreadsheetId
  )}/values/A1:append?valueInputOption=USER_ENTERED`;

  const response = await fetch(appendUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: [data] }),
  });

  const raw = await response.text();
  let payload: any = null;
  try {
    payload = raw ? JSON.parse(raw) : null;
  } catch {
    payload = null;
  }

  if (!response.ok) {
    throw new Error(payload?.error?.message || `Google Sheets append failed (${response.status}).`);
  }

  return payload ?? { status: 'success' };
}
