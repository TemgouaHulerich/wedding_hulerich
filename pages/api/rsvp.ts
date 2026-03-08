import { rsvpSchema } from '@/utils/validation';
import { writeToSheet } from '@/utils/sheets';

export const runtime = 'edge';
export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return Response.json({ status: 'error', message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();
    const validatedData = rsvpSchema.safeParse(body);

    if (!validatedData.success) {
      return Response.json(
        { status: 'error', message: 'Donnees invalides.', errors: validatedData.error.flatten() },
        { status: 400 }
      );
    }

    const payload = validatedData.data;
    const sheetData = [
      new Date().toISOString(),
      payload.name,
      payload.email,
      payload.presence,
      payload.guests || 0,
      payload.diet || '',
      payload.message || '',
    ];

    await writeToSheet(sheetData);

    return Response.json({ status: 'success', message: 'RSVP enregistre avec succes.' }, { status: 200 });
  } catch (error: any) {
    console.error('API RSVP Error:', error);
    return Response.json({ status: 'error', message: 'Erreur interne du serveur.' }, { status: 500 });
  }
}
