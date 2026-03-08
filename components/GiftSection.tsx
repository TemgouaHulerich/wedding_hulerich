import React, { useMemo, useState } from 'react';
import Image from 'next/image';

const GiftSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const paypalEmail = 'hulerichtemgoua@gmail.com';
  const weroNumber = '+33754579041';
  const iban = 'FR76 3000 4000 0500 0012 3456 789';

  const paypalDonationUrl = useMemo(() => {
    if (process.env.NEXT_PUBLIC_PAYPAL_DONATION_URL) {
      return process.env.NEXT_PUBLIC_PAYPAL_DONATION_URL;
    }
    const params = new URLSearchParams({
      cmd: '_xclick',
      business: paypalEmail,
      item_name: 'Contribution mariage Lyne et Hulerich',
      currency_code: 'EUR',
    });
    return `https://www.paypal.com/cgi-bin/webscr?${params.toString()}`;
  }, []);

  const bankTransferUrl = process.env.NEXT_PUBLIC_BANK_TRANSFER_URL;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2500);
    });
  };

  return (
    <section id="gift" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-neutral-black mb-4">Liste de Cadeaux</h2>
        <p className="max-w-3xl mx-auto text-neutral-black/80 mb-10">
          Votre presence est notre plus beau cadeau. Si vous souhaitez toutefois nous offrir quelque chose,
          une contribution a notre lune de miel serait grandement appreciee.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center p-8 border border-gray-200 rounded-lg shadow-sm">
            <div className="relative h-12 w-32 mb-4">
              <Image src="/images/paypal.png" alt="Logo PayPal" layout="fill" objectFit="contain" />
            </div>
            <h3 className="text-2xl font-serif text-neutral-black mb-4">Via PayPal</h3>
            <p className="text-neutral-black/80 mb-6 flex-grow">Paiement direct en ligne via PayPal.</p>
            <div className="bg-neutral-beige p-4 rounded-md mb-4 w-full flex items-center justify-center">
              <p className="font-sans text-lg font-semibold text-neutral-black/90 break-words select-all">{paypalEmail}</p>
            </div>
            <a
              href={paypalDonationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-black text-white font-bold py-3 px-8 rounded-full hover:bg-accent-gray transition-colors w-full mb-3"
            >
              Payer avec PayPal
            </a>
            <button
              onClick={() => handleCopy(paypalEmail, 'paypal')}
              className="border border-neutral-black text-neutral-black font-bold py-3 px-8 rounded-full hover:bg-neutral-beige transition-colors w-full"
            >
              {copied === 'paypal' ? 'Email copie !' : 'Copier l email'}
            </button>
          </div>

          <div className="flex flex-col items-center p-8 border border-gray-200 rounded-lg shadow-sm">
            <div className="relative h-12 w-24 mb-4">
              <Image src="/images/wero.png" alt="Logo Wero" layout="fill" objectFit="contain" />
            </div>
            <h3 className="text-2xl font-serif text-neutral-black mb-4">Via Wero</h3>
            <p className="text-neutral-black/80 mb-6 flex-grow">Pour un virement instantane, utilisez notre numero Wero.</p>
            <div className="bg-neutral-beige p-4 rounded-md mb-6 w-full flex items-center justify-center">
              <p className="font-sans text-lg font-semibold text-neutral-black/90 break-words select-all">{weroNumber}</p>
            </div>
            <button
              onClick={() => handleCopy(weroNumber, 'wero')}
              className="bg-neutral-black text-white font-bold py-3 px-8 rounded-full hover:bg-accent-gray transition-colors w-full mt-auto"
            >
              {copied === 'wero' ? 'Numero copie !' : 'Copier le numero'}
            </button>
          </div>

          <div className="flex flex-col items-center p-8 border border-gray-200 rounded-lg shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 mb-4">
              <path d="M3 21h18" />
              <path d="M5 21V7l7-4 7 4v14" />
              <path d="M12 21V11" />
            </svg>
            <h3 className="text-2xl font-serif text-neutral-black mb-4">Virement Bancaire</h3>
            <p className="text-neutral-black/80 mb-6 flex-grow">Si votre banque propose une interface web/app, vous pouvez y etre redirige.</p>
            <div className="bg-neutral-beige p-4 rounded-md mb-4 w-full flex items-center justify-center">
              <p className="font-sans text-lg font-semibold text-neutral-black/90 break-words select-all">{iban}</p>
            </div>
            {bankTransferUrl ? (
              <a
                href={bankTransferUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-black text-white font-bold py-3 px-8 rounded-full hover:bg-accent-gray transition-colors w-full mb-3"
              >
                Ouvrir le virement
              </a>
            ) : null}
            <button
              onClick={() => handleCopy(iban, 'iban')}
              className="border border-neutral-black text-neutral-black font-bold py-3 px-8 rounded-full hover:bg-neutral-beige transition-colors w-full"
            >
              {copied === 'iban' ? 'IBAN copie !' : 'Copier l IBAN'}
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 p-6 bg-neutral-beige rounded-lg">
          <h3 className="text-xl font-serif text-neutral-black mb-2">N oubliez pas le petit mot</h3>
          <p className="text-neutral-black/80">
            Pour que nous puissions vous remercier personnellement, merci d ajouter votre nom dans le commentaire de votre virement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
