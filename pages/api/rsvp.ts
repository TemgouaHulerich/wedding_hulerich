import type { NextApiRequest, NextApiResponse } from 'next';
import { rsvpSchema } from '@/utils/validation';
import { writeToSheet } from '@/utils/sheets';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Validation Backend
    const validatedData = rsvpSchema.parse(req.body);
    
    // Ordre des données pour Google Sheets
    const sheetData = [
      new Date().toISOString(),
      validatedData.name,
      validatedData.email,
      validatedData.presence,
      validatedData.guests || 0,
      validatedData.diet || '',
      validatedData.message || '',
    ];

    await writeToSheet(sheetData);

    res.status(200).json({ status: 'success', message: 'RSVP enregistré avec succès.' });
  } catch (error: any) {
    if (error.errors) { // Erreur de validation Zod
      return res.status(400).json({ status: 'error', message: 'Données invalides.', errors: error.flatten() });
    }
    console.error('API RSVP Error:', error);
    res.status(500).json({ status: 'error', message: 'Erreur interne du serveur.' });
  }
}
