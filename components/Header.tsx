import React from 'react';

const Header = () => {
  return (
    <header className="bg-neutral-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <div className="font-serif text-xl text-neutral-black text-center md:text-left">
          L & H
        </div>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm md:text-base md:gap-x-8">
          <li><a href="#story" className="text-neutral-black hover:text-accent-gray transition-all duration-300 transform hover:-translate-y-0.5">Notre histoire</a></li>
          <li><a href="#info" className="text-neutral-black hover:text-accent-gray transition-all duration-300 transform hover:-translate-y-0.5">Infos</a></li>
          <li><a href="#gallery" className="text-neutral-black hover:text-accent-gray transition-all duration-300 transform hover:-translate-y-0.5">Galerie</a></li>
          <li><a href="#rsvp" className="text-neutral-black hover:text-accent-gray transition-all duration-300 transform hover:-translate-y-0.5">RSVP</a></li>
          <li><a href="#gift" className="text-neutral-black hover:text-accent-gray transition-all duration-300 transform hover:-translate-y-0.5">Cadeaux</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
