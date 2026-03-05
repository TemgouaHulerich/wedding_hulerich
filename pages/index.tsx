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
        <meta name="description" content="Rejoignez-nous pour célébrer notre mariage le 20 Juin 2026." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Helvetica+Neue&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main>
        <HeroSection />
        <StorySection />
        <InfoSection />
        <GallerySection />
        <div id="rsvp" className="py-20 bg-neutral-beige">
          <h2 className="text-4xl font-serif text-center text-neutral-black mb-12">RSVP</h2>
          <RSVPForm />
        </div>
        <GiftSection />
      </main>

      <Footer />
    </div>
  );
}
