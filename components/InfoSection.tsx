import React from 'react';

const partyMapUrl =
  'https://www.google.com/maps?q=Zone%20Industrielle%20des%2C%20Les%20Bas%20Pr%C3%A9s%2C%2060160%20Montataire&output=embed';

const partyDirectionsUrl =
  'https://www.google.com/maps/dir/?api=1&origin=%C3%89glise%20Notre-Dame-de-l%27Assomption%2C%2016%20Rue%20Carnot%2C%2093240%20Stains&destination=Les%20Bas%20Pr%C3%A9s%2C%2060160%20Montataire&travelmode=driving';

const partyTransitUrl =
  'https://www.google.com/maps/dir/?api=1&origin=%C3%89glise%20Notre-Dame-de-l%27Assomption%2C%2016%20Rue%20Carnot%2C%2093240%20Stains&destination=Les%20Bas%20Pr%C3%A9s%2C%2060160%20Montataire&travelmode=transit';

const wineReceptionDirectionsUrl =
  'https://www.google.com/maps/dir/?api=1&origin=%C3%89glise%20Notre-Dame-de-l%27Assomption%2C%2016%20Rue%20Carnot%2C%2093240%20Stains&destination=21%20Rue%20Nungesser%20et%20Coli%2C%2093380%20Saint-Denis&travelmode=driving';

const hotelsNearChurch = [
  {
    name: 'B&B Hôtel Saint-Denis Porte de Paris',
    address: '14 Avenue du Dr Lamaze, 93200 Saint-Denis',
    url: 'https://www.google.com/maps/dir/%C3%89glise+Notre-Dame-de-l%27Assomption,+16+Rue+Carnot,+93240+Stains/B%26B+HOTEL+Saint-Denis+Porte+de+Paris,+14+Avenue+du+Dr+Lamaze,+93200+Saint-Denis/@48.9434218,2.3544188,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47e66bddc63f84d9:0xfcd48a8969501e7c!2m2!1d2.3821534!2d48.9566137!1m5!1m1!1s0x47e66eaae56ea5fd:0xf1887ae711b8c087!2m2!1d2.3734418!2d48.9337821!3e3?entry=ttu',
  },
  {
    name: 'Hôtel Mercure Paris Le Bourget',
    address: '2 Rue Jean Perrin, 93150 Le Blanc-Mesnil',
    url: 'https://www.google.com/maps/dir/?api=1&origin=%C3%89glise%20Notre-Dame-de-l%27Assomption%2C%2016%20Rue%20Carnot%2C%2093240%20Stains&destination=H%C3%B4tel%20Mercure%20Paris%20Le%20Bourget%2C%202%20Rue%20Jean%20Perrin%2C%2093150%20Le%20Blanc-Mesnil',
  },
];

const hotelsNearParty = [
  {
    name: 'B&B HOTEL Creil Chantilly',
    address: "53 Rue Rouget de l'Isle, 60100 Creil",
    url: 'https://www.google.com/maps/dir/%C3%89glise+Notre-Dame-de-l%27Assomption,+16+Rue+Carnot,+93240+Stains/B%26B+HOTEL+Creil+Chantilly,+53+Rue+Rouget+de+l%27Isle,+60100+Creil/@49.1100385,2.118332,10z/am=t/data=!3m2!4b1!5s0x47e668b59a45e715:0xfdc579c099354f96!4m14!4m13!1m5!1m1!1s0x47e66bddc63f84d9:0xfcd48a8969501e7c!2m2!1d2.3821534!2d48.9566137!1m5!1m1!1s0x47e64a41d8bd9e17:0xcecaf2ad9be34e69!2m2!1d2.473377!2d49.2443833!3e3?entry=ttu',
  },
  {
    name: 'Hôtel Première Classe Creil',
    address: '5 Rue du Marais, 60870 Villers-Saint-Paul',
    url: 'https://www.google.com/maps/dir/?api=1&origin=Les%20Bas%20Pr%C3%A9s%2C%2060160%20Montataire&destination=Premi%C3%A8re%20Classe%20Creil%2C%205%20Rue%20du%20Marais%2C%2060870%20Villers-Saint-Paul',
  },
];

const dressCodeColors = [
  { name: 'Ivoire / beige clair', color: '#eadccd' },
  { name: 'Rose poudré / corail', color: '#df8a86' },
  { name: 'Rose soutenu', color: '#d54868' },
  { name: 'Bordeaux', color: '#9c172c' },
];

const HotelGroup = ({
  title,
  hotels,
}: {
  title: string;
  hotels: typeof hotelsNearChurch;
}) => (
  <div className="bg-white/90 border border-white rounded-lg p-6 shadow-lg shadow-black/5">
    <h3 className="text-2xl font-serif text-neutral-black mb-5">{title}</h3>
    <div className="space-y-5">
      {hotels.map((hotel) => (
        <div key={hotel.name} className="border-t border-neutral-black/10 pt-5 first:border-t-0 first:pt-0">
          <p className="font-semibold text-neutral-black">{hotel.name}</p>
          <p className="text-neutral-black/75 mt-1">{hotel.address}</p>
          <a
            href={hotel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-3 text-sm font-semibold text-neutral-black border border-neutral-black/30 rounded-full px-4 py-2 hover:bg-neutral-black hover:text-white transition-colors"
          >
            Voir l&apos;itinéraire
          </a>
        </div>
      ))}
    </div>
  </div>
);

const InfoSection = () => {
  return (
    <section id="info" className="py-20 bg-neutral-beige">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center text-neutral-black mb-12">Informations Pratiques</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="flex items-center text-2xl font-serif text-neutral-black mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                La Cérémonie
              </h3>
              <p className="text-neutral-black/80"><strong>Église Notre-Dame-de-l&apos;Assomption</strong></p>
              <p className="text-neutral-black/80">16 Rue Carnot, 93240 Stains</p>
              <p className="text-neutral-black/80 mt-2"><strong>Heure :</strong> 10h00</p>
            </div>

            <div>
              <h3 className="flex items-center text-2xl font-serif text-neutral-black mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Vin d&apos;honneur
              </h3>
              <p className="text-neutral-black/80">
                Après la cérémonie et quelques photos, le vin d&apos;honneur aura lieu dans la salle mise à disposition par le prêtre.
              </p>
              <a href={wineReceptionDirectionsUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-neutral-black/80 hover:text-accent-gray transition-colors mt-2">
                21 Rue Nungesser et Coli, 93380 Saint-Denis
              </a>
            </div>

            <div>
              <h3 className="flex items-center text-2xl font-serif text-neutral-black mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                La Soirée
              </h3>
              <p className="text-neutral-black/80"><strong>La Villa Angelie</strong></p>
              <a href={partyDirectionsUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-black/80 hover:text-accent-gray transition-colors">
                Zone Industrielle des, Les Bas Prés, 60160 Montataire
              </a>
              <p className="text-neutral-black/80 mt-2"><strong>Début :</strong> 18h30</p>
            </div>

            <div>
              <h3 className="flex items-center text-2xl font-serif text-neutral-black mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343" />
                </svg>
                Code Vestimentaire
              </h3>
              <p className="text-neutral-black/80 mb-6">
                Pour célébrer avec nous, nous vous invitons à adopter une palette de couleurs douces et romantiques. Voici quelques suggestions pour vous inspirer. L&apos;élégance et le confort sont de mise pour fêter jusqu&apos;au bout de la nuit !
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {dressCodeColors.map((item) => (
                  <div key={item.name} className="text-center w-24">
                    <div
                      className="w-20 h-20 rounded-full shadow-md mx-auto border-2 border-white"
                      style={{ backgroundColor: item.color }}
                      aria-label={item.name}
                    />
                    <p className="mt-2 text-sm text-neutral-black/80">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg bg-white">
              <iframe
                src={partyMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte du lieu de la soirée"
              ></iframe>
            </div>

            <div className="bg-white/90 border border-white rounded-lg p-6 shadow-lg shadow-black/5">
              <h3 className="text-2xl font-serif text-neutral-black mb-4">Accès à la soirée</h3>
              <div className="space-y-5 text-neutral-black/80">
                <div>
                  <p className="font-semibold text-neutral-black">En transport</p>
                  <p>
                    Depuis l&apos;église, prévoir environ 1h40 selon les horaires : bus 150 jusqu&apos;à Pierrefitte-Stains, puis RER/TER via Gare du Nord et Creil, bus AXO vers Montataire, et marche finale jusqu&apos;aux Bas Prés.
                  </p>
                  <a href={partyTransitUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm font-semibold underline underline-offset-4">
                    Voir l&apos;itinéraire en transport
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-neutral-black">En voiture</p>
                  <p>
                    Depuis l&apos;église, rejoindre l&apos;A1 direction Senlis, prendre la sortie 8, puis suivre D1330/D201 vers Les Bas Prés à Montataire. Compter environ 50 minutes selon le trafic.
                  </p>
                  <a href={partyDirectionsUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm font-semibold underline underline-offset-4">
                    Voir l&apos;itinéraire en voiture
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/90 border border-white rounded-lg p-6 shadow-lg shadow-black/5">
              <h3 className="text-2xl font-serif text-neutral-black mb-3">Contacts pratiques</h3>
              <p className="text-neutral-black/80">
                Le jour J, les mariés seront probablement en mode photos, émotions et grandes respirations. Pour les questions pratiques, appelez plutôt :
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <a href="tel:+33754579049" className="font-semibold text-neutral-black border border-neutral-black/30 rounded-full px-4 py-2 hover:bg-neutral-black hover:text-white transition-colors">
                  07 54 57 90 49
                </a>
                <a href="tel:+33749771604" className="font-semibold text-neutral-black border border-neutral-black/30 rounded-full px-4 py-2 hover:bg-neutral-black hover:text-white transition-colors">
                  07 49 77 16 04
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-3xl font-serif text-center text-neutral-black mb-8">Hôtels suggérés</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <HotelGroup title="Proches de l&apos;église et du vin d&apos;honneur" hotels={hotelsNearChurch} />
            <HotelGroup title="Proches de la soirée" hotels={hotelsNearParty} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
