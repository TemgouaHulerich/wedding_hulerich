import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import { motion } from 'framer-motion';
import { storyEvents } from './story';

const StorySection = () => {
  const [lightbox, setLightbox] = useState({ open: false, index: 0, slides: [] as { src: string }[] });

  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center text-neutral-black mb-12">Notre Histoire</h2>
        <div className="relative">
          {/* Ligne de la timeline */}
          <div className="absolute left-1/2 h-full w-0.5 bg-accent-gray/30 transform -translate-x-1/2 hidden md:block"></div>

          {storyEvents.map((event, index) => (
            <motion.div
              key={index}
              className="mb-12 flex justify-between items-center w-full flex-col md:flex-row"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Contenu à gauche */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                <div className="p-6 bg-neutral-beige rounded-lg shadow-md">
                  <p className="text-accent-gray font-semibold mb-1">{event.date}</p>
                  <h3 className="text-2xl font-serif text-neutral-black mb-2">{event.title}</h3>
                  <p className="text-neutral-black/80">{event.description}</p>
                </div>
              </div>

              {/* Point sur la timeline */}
              <div className="z-10 hidden md:flex items-center justify-center w-8 h-8 bg-accent-gray rounded-full text-white md:order-2">
                {index + 1}
              </div>

              {/* Image à droite */}
              <div className={`w-full md:w-5/12 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                {event.imageUrls.length === 1 ? (
                  <div
                    className="group relative h-80 w-full rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => setLightbox({
                      open: true,
                      index: 0,
                      slides: event.imageUrls.map(src => ({ src }))
                    })}
                  >
                    <Image
                      src={event.imageUrls[0]}
                      alt={event.title}
                      layout="fill"
                      objectFit="cover"
                      objectPosition={event.objectPosition || 'center'}
                      loading="lazy"
                      className={`transform transition-all duration-300 group-hover:scale-105 ${event.grayscale ? 'filter grayscale group-hover:filter-none' : ''}`}
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {event.imageUrls.map((url, imgIndex) => (
                      <div
                        key={imgIndex} className="group relative aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer"
                        onClick={() => setLightbox({
                          open: true,
                          index: imgIndex,
                          slides: event.imageUrls.map(src => ({ src }))
                        })}
                      >
                        <Image src={url} alt={`${event.title} ${imgIndex + 1}`} layout="fill" objectFit="cover" loading="lazy" className={`transform transition-all duration-300 group-hover:scale-105 ${event.grayscale ? 'filter grayscale group-hover:filter-none' : ''}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Lightbox
        open={lightbox.open}
        close={() => setLightbox(prev => ({ ...prev, open: false }))}
        slides={lightbox.slides}
        index={lightbox.index}
      />
    </section>
  );
};

export default StorySection;
