import { google } from 'googleapis';

export async function writeToSheet(data: any[]) {
  try {
    // Use base64-encoded credentials from env
    const base64 = process.env.GOOGLE_API_CREDENTIALS_BASE64 || '';
    const credentials = base64 ? JSON.parse(Buffer.from(base64, 'base64').toString('utf-8')) : {};
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A1', // ou le nom de votre feuille, ex: 'Réponses!A1'
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [data],
      },
    });

    return response;
  } catch (error) {
    console.error('Error writing to Google Sheets:', error);
    throw new Error('Failed to write to Google Sheets.');
  }
}
