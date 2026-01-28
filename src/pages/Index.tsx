import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { StorySection } from '@/components/home/StorySection';
import { ProofSection } from '@/components/home/ProofSection';
import { MasterPlanSection } from '@/components/home/MasterPlanSection';
import { WhyAnayaSection } from '@/components/home/WhyAnayaSection';
import { AmenitiesSection } from '@/components/home/AmenitiesSection';
import { LocationSection } from '@/components/home/LocationSection';
import { GalleryTeaser } from '@/components/home/GalleryTeaser';
import { DeveloperSection } from '@/components/home/DeveloperSection';
import { BookingSection } from '@/components/home/BookingSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <StorySection />
        <ProofSection />
        <MasterPlanSection />
        <WhyAnayaSection />
        <AmenitiesSection />
        <LocationSection />
        <GalleryTeaser />
        <DeveloperSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
