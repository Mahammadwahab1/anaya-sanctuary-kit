import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Leaf, Wind, Sun, Droplets } from 'lucide-react';

import heroImage from '@/assets/villa-exterior.jpg';
import natureImage from '@/assets/amenity-outdoor.jpg';
import harmonyImage from '@/assets/amenity-exterior.jpg';
import tranquilImage from '@/assets/amenity-night.jpg';

const philosophyPillars = [
  {
    icon: Leaf,
    title: 'Rooted in Nature',
    description: 'Every villa breathes with the land',
  },
  {
    icon: Wind,
    title: 'Open to Air',
    description: 'Cross-ventilation by design',
  },
  {
    icon: Sun,
    title: 'Bathed in Light',
    description: 'Golden hours in every room',
  },
  {
    icon: Droplets,
    title: 'Water Conscious',
    description: 'Rainwater harvesting throughout',
  },
];

export default function Sanctuary() {
  const heroReveal = useScrollReveal<HTMLElement>();
  const philosophyReveal = useScrollReveal<HTMLElement>();
  const natureReveal = useScrollReveal<HTMLElement>();
  const harmonyReveal = useScrollReveal<HTMLElement>();
  const tranquilReveal = useScrollReveal<HTMLElement>();
  const ctaReveal = useScrollReveal<HTMLElement>();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section - Full Width Immersive */}
        <section
          ref={heroReveal.ref}
          className="relative h-screen w-full overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Anaya Sanctuary Villa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-foreground/40" />
          </div>
          
          <div
            className={cn(
              'relative z-10 h-full flex flex-col items-center justify-center text-center px-6',
              'opacity-0 translate-y-8 transition-all duration-1000',
              heroReveal.isVisible && 'opacity-100 translate-y-0'
            )}
          >
            <p className="font-body text-secondary/80 text-sm tracking-[0.4em] uppercase mb-6">
              The Philosophy
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-secondary mb-6 max-w-4xl">
              The Sanctuary
            </h1>
            <p className="font-body text-secondary/90 text-lg md:text-xl max-w-2xl">
              Where architecture dissolves into nature
            </p>
          </div>
        </section>

        {/* Philosophy Pillars */}
        <section
          ref={philosophyReveal.ref}
          className="section-padding bg-secondary"
        >
          <div className="container-wide">
            <div
              className={cn(
                'text-center mb-16',
                'opacity-0 translate-y-8 transition-all duration-700',
                philosophyReveal.isVisible && 'opacity-100 translate-y-0'
              )}
            >
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                Built with <span className="text-primary">Intention</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-xl mx-auto">
                Every design decision honors the land
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {philosophyPillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={cn(
                    'text-center',
                    'opacity-0 translate-y-6 transition-all duration-500',
                    philosophyReveal.isVisible && 'opacity-100 translate-y-0'
                  )}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nature Integration - Full Bleed Image Left */}
        <section
          ref={natureReveal.ref}
          className="grid lg:grid-cols-2 min-h-[80vh]"
        >
          <div
            className={cn(
              'relative h-[50vh] lg:h-auto overflow-hidden',
              'opacity-0 scale-105 transition-all duration-1000',
              natureReveal.isVisible && 'opacity-100 scale-100'
            )}
          >
            <img
              src={natureImage}
              alt="Natural landscape integration"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div
            className={cn(
              'flex items-center justify-center p-12 lg:p-20 bg-background',
              'opacity-0 translate-x-8 transition-all duration-700 delay-300',
              natureReveal.isVisible && 'opacity-100 translate-x-0'
            )}
          >
            <div className="max-w-md">
              <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
                Landscape Design
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Nature Preserved, Not Replaced
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Existing trees mapped and protected. Native species reintroduced. 
                Gardens that attract butterflies and birdsong.
              </p>
            </div>
          </div>
        </section>

        {/* Harmony Section - Full Bleed Image Right */}
        <section
          ref={harmonyReveal.ref}
          className="grid lg:grid-cols-2 min-h-[80vh]"
        >
          <div
            className={cn(
              'flex items-center justify-center p-12 lg:p-20 bg-secondary order-2 lg:order-1',
              'opacity-0 -translate-x-8 transition-all duration-700 delay-300',
              harmonyReveal.isVisible && 'opacity-100 translate-x-0'
            )}
          >
            <div className="max-w-md">
              <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
                Architectural Harmony
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Low-Rise, Low-Density
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                No towering structures. No crowded plots. 
                Just 42 villas across 18 acres—each with room to breathe.
              </p>
            </div>
          </div>
          
          <div
            className={cn(
              'relative h-[50vh] lg:h-auto overflow-hidden order-1 lg:order-2',
              'opacity-0 scale-105 transition-all duration-1000',
              harmonyReveal.isVisible && 'opacity-100 scale-100'
            )}
          >
            <img
              src={harmonyImage}
              alt="Villa architectural harmony"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Tranquil Living - Full Width */}
        <section
          ref={tranquilReveal.ref}
          className="relative h-[90vh] w-full overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src={tranquilImage}
              alt="Evening tranquility at Anaya"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          </div>
          
          <div
            className={cn(
              'relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-20',
              'opacity-0 translate-y-8 transition-all duration-1000',
              tranquilReveal.isVisible && 'opacity-100 translate-y-0'
            )}
          >
            <h2 className="font-display text-4xl md:text-6xl text-secondary mb-4">
              Designed for Quiet Moments
            </h2>
            <p className="font-body text-secondary/80 text-lg max-w-xl">
              Where evenings are spent under open skies, not concrete ceilings
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaReveal.ref}
          className="section-padding bg-primary"
        >
          <div
            className={cn(
              'container-wide text-center',
              'opacity-0 translate-y-8 transition-all duration-700',
              ctaReveal.isVisible && 'opacity-100 translate-y-0'
            )}
          >
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
              Walk the Land with Us
            </h2>
            <p className="font-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Experience the sanctuary before you make it home
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-foreground hover:bg-secondary/90 font-body tracking-wide"
            >
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
