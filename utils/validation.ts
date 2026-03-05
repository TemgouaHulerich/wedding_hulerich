import { z } from 'zod';

export const rsvpSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  presence: z.enum(['Oui', 'Non'], { required_error: "Veuillez indiquer votre présence." }),
  guests: z.number().min(0).optional(),
  diet: z.string().optional(),
  message: z.string().optional(),
});
