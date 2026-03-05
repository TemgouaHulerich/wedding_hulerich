import React from 'react';

const Header = () => {
  return (
    <header className="bg-neutral-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-serif text-xl text-neutral-black">
          L & H
        </div>
        <ul className="flex space-x-8">
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
