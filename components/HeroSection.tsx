import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <Image
        src="/images/principale.jpg"
        alt="Lyne et Hulerich"
        layout="fill"
        objectFit="cover"
        objectPosition="center 25%" // Vous pouvez ajuster ce pourcentage (de 0% à 100%) pour déplacer l'image verticalement.
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="z-10 p-6">
        <h1 className="text-6xl md:text-8xl font-serif mb-4">Lyne & Hulerich</h1>
        <p className="text-xl md:text-2xl font-sans mb-2">CÉLÈBRENT LEUR AMOUR</p>
        <p className="text-2xl md:text-4xl font-serif mb-8">20 JUIN 2026</p>
        <a
          href="#rsvp"
          className="bg-neutral-white text-neutral-black font-bold py-3 px-8 rounded-full hover:bg-neutral-beige transition-colors"
          aria-label="Répondre à l'invitation"
        >
          RÉPONDRE À L'INVITATION
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
