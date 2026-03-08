import { Great_Vibes, Playfair_Display } from 'next/font/google';

export const serifFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const brandFont = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-brand',
  display: 'swap',
});
