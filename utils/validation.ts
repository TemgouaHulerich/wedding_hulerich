import { z } from 'zod';

export const rsvpSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caracteres.' }),
  email: z.string().email({ message: 'Veuillez entrer une adresse email valide.' }),
  presence: z.enum(['Oui', 'Non'], { required_error: 'Veuillez indiquer votre presence.' }),
  hotelNeeded: z.enum(['Oui', 'Non']).optional(),
  songRequest: z.string().max(120, { message: '120 caracteres maximum.' }).optional(),
  diet: z.string().optional(),
  message: z.string().optional(),
});
