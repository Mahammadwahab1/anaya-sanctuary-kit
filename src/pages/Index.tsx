import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { ProofSection } from '@/components/home/ProofSection';
import { WhyAnayaSection } from '@/components/home/WhyAnayaSection';
import { DesignSection } from '@/components/home/DesignSection';
import { AmenitiesSection } from '@/components/home/AmenitiesSection';
import { LocationSection } from '@/components/home/LocationSection';
import { GalleryTeaser } from '@/components/home/GalleryTeaser';
import { BookingSection } from '@/components/home/BookingSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProofSection />
        <WhyAnayaSection />
        <DesignSection />
        <AmenitiesSection />
        <LocationSection />
        <GalleryTeaser />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
