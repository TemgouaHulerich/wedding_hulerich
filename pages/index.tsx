import Head from 'next/head';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import InfoSection from '@/components/InfoSection';
import GallerySection from '@/components/GallerySection';
import RSVPForm from '@/components/RSVPForm';
import GiftSection from '@/components/GiftSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-neutral-white">
      <Head>
        <title>Lyne & Hulerich | Notre Mariage</title>
        <meta
          name="description"
          content="Rejoignez-nous pour celebrer notre mariage le 20 Juin 2026."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <HeroSection />
        <StorySection />
        <InfoSection />
        <div id="rsvp" className="py-20 bg-gradient-to-b from-neutral-beige to-white">
          <div className="max-w-5xl mx-auto px-6 text-center mb-10">
            <p className="inline-block text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-accent-gray/30 text-accent-gray mb-4">
              Confirmation
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-black">RSVP</h2>
          </div>
          <RSVPForm />
        </div>
        <GiftSection />
        <GallerySection />
      </main>

      <Footer />
    </div>
  );
}
