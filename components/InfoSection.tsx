import React from 'react';

const InfoSection = () => {
  return (
    <section id="info" className="py-20 bg-neutral-beige">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center text-neutral-black mb-12">Informations Pratiques</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Colonne d'informations */}
          <div className="space-y-8">
            <div>
              <h3 className="flex items-center text-2xl font-serif text-neutral-black mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                La Cérémonie
              </h3>
              <p className="text-neutral-black/80"><strong>Cathédrale Notre Dame de L'Assomption</strong></p>
              <p className="text-neutral-black/80">16 Rue Carnot, 93240 Stains</p>
              <p className="text-neutral-black/80 mt-2"><strong>Heure :</strong> 11h00</p>
            </div>
            <div>
              <h3 className="flex items-center text-2xl font-serif text-neutral-black mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                La Réception
              </h3>
              <p className="text-neutral-black/80"><strong>La Villa Angelie</strong></p>
              <a href="https://www.google.com/maps/search/?api=1&query=La+Villa+Angelie+Zone+Industrielle+des+Les+Bas+Prés+60160+Montataire" target="_blank" rel="noopener noreferrer" className="text-neutral-black/80 hover:text-accent-gray transition-colors">
                Zone Industrielle des, Les Bas Prés, 60160 Montataire
              </a>
              <p className="text-neutral-black/80 mt-2"><strong>Horaires :</strong></p>
              <p className="text-neutral-black/80">Vin d'honneur à partir de 14h, suivi de la soirée.</p>
            </div>
            <div>
              <h3 className="flex items-center text-2xl font-serif text-neutral-black mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Code Vestimentaire
              </h3>
              <p className="text-neutral-black/80 mb-6">Pour célébrer avec nous, nous vous invitons à adopter une palette de couleurs douces et romantiques. Voici quelques suggestions pour vous inspirer. L'élégance et le confort sont de mise pour fêter jusqu'au bout de la nuit !</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-rose-200 shadow-md mx-auto border-2 border-white"></div>
                  <p className="mt-2 text-sm text-neutral-black/80">Rose poudré</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-stone-100 shadow-md mx-auto border-2 border-white"></div>
                  <p className="mt-2 text-sm text-neutral-black/80">Blanc cassé</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-rose-300 shadow-md mx-auto border-2 border-white"></div>
                  <p className="mt-2 text-sm text-neutral-black/80">Bordeaux clair</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne de la carte */}
          <div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.450348434777!2d2.381397076935541!3d48.95980099238908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e669527580a87d%3A0x46152a58a46f2053!2s%C3%89glise%20Notre-Dame-de-l'Assomption!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte du lieu de la cérémonie"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;
