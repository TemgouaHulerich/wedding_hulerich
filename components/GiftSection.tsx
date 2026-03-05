import React, { useState } from 'react';
import Image from 'next/image';

const GiftSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2500);
    });
  };

  const paypalEmail = 'hulerichtemgoua@gmail.com';
  const weroNumber = '+33754579041';
  const iban = 'FR76 3000 4000 0500 0012 3456 789'; // Placeholder IBAN

  return (
    <section id="gift" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-neutral-black mb-4">Liste de Cadeaux</h2>
        <p className="max-w-3xl mx-auto text-neutral-black/80 mb-12">
          Votre présence est notre plus beau cadeau. Si vous souhaitez toutefois nous offrir quelque chose,
          une contribution à notre lune de miel serait grandement appréciée.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Option 1: PayPal */}
          <div className="flex flex-col items-center p-8 border border-gray-200 rounded-lg shadow-sm">
            <div className="relative h-12 w-32 mb-4">
              <Image
                src="/images/paypal.png" // Assurez-vous que le nom du fichier est correct
                alt="Logo PayPal"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-2xl font-serif text-neutral-black mb-4">Via PayPal</h3>
            <p className="text-neutral-black/80 mb-6 flex-grow">Vous pouvez nous envoyer une contribution directement via PayPal.</p>
            <div className="bg-neutral-beige p-4 rounded-md mb-6 w-full flex items-center justify-center">
              <p className="font-sans text-lg font-semibold text-neutral-black/90 break-words select-all">{paypalEmail}</p>
            </div>
            <button
              onClick={() => handleCopy(paypalEmail, 'paypal')}
              className="bg-neutral-black text-white font-bold py-3 px-8 rounded-full hover:bg-accent-gray transition-colors w-full mt-auto"
            >
              {copied === 'paypal' ? 'Email copié !' : 'Copier l’email'}
            </button>
          </div>

          {/* Option 2: Wero */}
          <div className="flex flex-col items-center p-8 border border-gray-200 rounded-lg shadow-sm">
            <div className="relative h-12 w-24 mb-4">
              <Image
                src="/images/wero.png" // Assurez-vous que le nom du fichier est correct
                alt="Logo Wero"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-2xl font-serif text-neutral-black mb-4">Via Wero</h3>
            <p className="text-neutral-black/80 mb-6 flex-grow">Pour un virement instantané, vous pouvez utiliser Wero avec notre numéro.</p>
            <div className="bg-neutral-beige p-4 rounded-md mb-6 w-full flex items-center justify-center">
              <p className="font-sans text-lg font-semibold text-neutral-black/90 break-words select-all">{weroNumber}</p>
            </div>
            <button
              onClick={() => handleCopy(weroNumber, 'wero')}
              className="bg-neutral-black text-white font-bold py-3 px-8 rounded-full hover:bg-accent-gray transition-colors w-full mt-auto"
            >
              {copied === 'wero' ? 'Numéro copié !' : 'Copier le numéro'}
            </button>
          </div>

          {/* Option 3: Virement Bancaire */}
          <div className="flex flex-col items-center p-8 border border-gray-200 rounded-lg shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 mb-4">
              <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M12 21V11" />
            </svg>
            <h3 className="text-2xl font-serif text-neutral-black mb-4">Virement Bancaire</h3>
            <p className="text-neutral-black/80 mb-6 flex-grow">Si vous préférez, vous pouvez également participer via un virement bancaire classique.</p>
            <div className="bg-neutral-beige p-4 rounded-md mb-6 w-full flex items-center justify-center">
              <p className="font-sans text-lg font-semibold text-neutral-black/90 break-words select-all">{iban}</p>
            </div>
            <button
              onClick={() => handleCopy(iban, 'iban')}
              className="bg-neutral-black text-white font-bold py-3 px-8 rounded-full hover:bg-accent-gray transition-colors w-full mt-auto"
            >
              {copied === 'iban' ? 'IBAN copié !' : 'Copier l’IBAN'}
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 p-6 bg-neutral-beige rounded-lg">
           <h3 className="text-xl font-serif text-neutral-black mb-2">N'oubliez pas le petit mot !</h3>
           <p className="text-neutral-black/80">
             Pour que nous puissions vous remercier personnellement, merci d'ajouter votre nom dans le commentaire de votre virement. Merci infiniment !
           </p>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
