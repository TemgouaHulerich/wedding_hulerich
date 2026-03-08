import '@/styles/globals.css';
import 'yet-another-react-lightbox/styles.css';
import type { AppProps } from 'next/app';
import { brandFont, serifFont } from '@/lib/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${serifFont.variable} ${brandFont.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
