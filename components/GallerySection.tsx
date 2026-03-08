import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import { motion } from 'framer-motion';

const galleryImages = [
  { src: '/images/Fermin-2.jpg', alt: 'Lyne et Hulerich photo 1' },
  { src: '/images/LyneHulerich-2.jpg', alt: 'Lyne et Hulerich photo 2' },
  { src: '/images/LyneHulerich-3.jpg', alt: 'Lyne et Hulerich photo 3' },
  { src: '/images/LyneHulerich-4.jpg', alt: 'Lyne et Hulerich photo 4' },
  { src: '/images/Fermin-3.jpg', alt: 'Lyne et Hulerich photo 5' },
  { src: '/images/Fermin-4.jpg', alt: 'Lyne et Hulerich photo 6' },
  { src: '/images/LyneHulerich-7.jpg', alt: 'Lyne et Hulerich photo 7' },
  { src: '/images/Fermin-1.jpg', alt: 'Souvenir de Pampelune' },
  { src: '/images/LyneHulerich-9.jpg', alt: 'Lyne et Hulerich photo 9' },
  { src: '/images/HulerichLangue.jpg', alt: 'Lyne et Hulerich photo 10' },
  { src: '/images/LyneHulerich-11.jpg', alt: 'Lyne et Hulerich photo 11' },
  { src: '/images/Hulerich_AmoureuxRestau.jpg', alt: 'Lyne et Hulerich photo 12' },
  { src: '/images/LH_Mariage_Geraldine.jpg', alt: 'Lyne et Hulerich photo 13' },
  { src: '/images/LH_Lac.jpg', alt: 'Lyne et Hulerich photo 14' },
  { src: '/images/LyneHulerichMusee.jpg', alt: 'Lyne et Hulerich photo 15' },
];

const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="gallery" className="py-20 bg-neutral-beige">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-center text-xs tracking-[0.2em] uppercase text-accent-gray mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Moments
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-center text-neutral-black mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Galerie
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              onClick={() => {
                setIndex(index);
                setOpen(true);
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages}
        index={index}
      />
    </section>
  );
};

export default GallerySection;
