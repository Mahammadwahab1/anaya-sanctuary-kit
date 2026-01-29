import { Link } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Shield, Zap, Waves, ArrowRight } from 'lucide-react';

// Import images
import amenityExterior from '@/assets/amenity-exterior.jpg';
import amenityOutdoor from '@/assets/amenity-outdoor.jpg';
import amenityNight from '@/assets/amenity-night.jpg';

const natureFeatures = [
  { title: 'Landscaped Gardens', description: 'Curated greenery at every turn' },
  { title: 'Walking Trails', description: 'Meandering paths through nature' },
  { title: 'Meditation Spaces', description: 'Quiet corners for reflection' },
];

const communityFeatures = [
  {
    title: 'Clubhouse',
    description: 'Where community gathers',
    image: amenityExterior,
    reverse: false,
  },
  {
    title: 'Kids Play Area',
    description: 'Safe spaces for little ones',
    image: amenityOutdoor,
    reverse: true,
  },
];

const infrastructureItems = [
  { icon: Shield, label: 'Gated Entry' },
  { icon: Zap, label: 'Power Backup' },
  { icon: Waves, label: 'Water Treatment' },
];

export default function Amenities() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: natureRef, isVisible: natureVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: communityRef, isVisible: communityVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: villaRef, isVisible: villaVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: infraRef, isVisible: infraVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Full Width Image */}
      <section
        ref={heroRef}
        className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={amenityExterior}
            alt="Anaya Sanctuary Villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
        </div>
        <div
          className={cn(
            'relative z-10 text-center px-6',
            'opacity-0 translate-y-8 transition-all duration-1000',
            heroVisible && 'opacity-100 translate-y-0'
          )}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6">
            Life at Anaya
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-xl mx-auto">
            Where every detail enhances the everyday
          </p>
        </div>
      </section>

      {/* Nature & Wellness Gallery */}
      <section ref={natureRef} className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div
            className={cn(
              'text-center mb-12 md:mb-16',
              'opacity-0 translate-y-8 transition-all duration-700',
              natureVisible && 'opacity-100 translate-y-0'
            )}
          >
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Nature & Wellness
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground">
              Embrace the Outdoors
            </h2>
          </div>

          {/* 3-Column Grid with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {natureFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  'group relative aspect-[4/5] rounded-lg overflow-hidden cursor-pointer',
                  'opacity-0 translate-y-8 transition-all duration-700',
                  natureVisible && 'opacity-100 translate-y-0'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <img
                  src={amenityOutdoor}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-xl md:text-2xl text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Spaces - Alternating Layout */}
      <section ref={communityRef} className="section-padding bg-background">
        <div className="container-wide">
          <div
            className={cn(
              'text-center mb-12 md:mb-20',
              'opacity-0 translate-y-8 transition-all duration-700',
              communityVisible && 'opacity-100 translate-y-0'
            )}
          >
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Community
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground">
              Spaces That Connect
            </h2>
          </div>

          <div className="space-y-16 md:space-y-24">
            {communityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  'grid grid-cols-1 lg:grid-cols-5 gap-8 items-center',
                  'opacity-0 translate-y-8 transition-all duration-700',
                  communityVisible && 'opacity-100 translate-y-0',
                  feature.reverse && 'lg:flex-row-reverse'
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Image - spans 3 columns */}
                <div
                  className={cn(
                    'lg:col-span-3 rounded-lg overflow-hidden',
                    feature.reverse && 'lg:order-2'
                  )}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full aspect-[16/10] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Text - spans 2 columns */}
                <div
                  className={cn(
                    'lg:col-span-2 text-center lg:text-left',
                    feature.reverse && 'lg:order-1 lg:text-right'
                  )}
                >
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-body text-lg text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villa Living - Full Bleed Showcase */}
      <section
        ref={villaRef}
        className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={amenityNight}
            alt="Villa at Night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div
          className={cn(
            'relative z-10 text-center px-6 max-w-3xl mx-auto',
            'opacity-0 translate-y-8 transition-all duration-1000',
            villaVisible && 'opacity-100 translate-y-0'
          )}
        >
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6">
            Designed for Quiet Moments
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white/80">
            <span className="font-body text-sm md:text-base tracking-wide">Private Gardens</span>
            <span className="hidden md:inline text-gold">•</span>
            <span className="font-body text-sm md:text-base tracking-wide">Outdoor Terraces</span>
            <span className="hidden md:inline text-gold">•</span>
            <span className="font-body text-sm md:text-base tracking-wide">Natural Light</span>
          </div>
        </div>
      </section>

      {/* Infrastructure - Minimal Icon Row */}
      <section ref={infraRef} className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div
            className={cn(
              'text-center mb-12',
              'opacity-0 translate-y-8 transition-all duration-700',
              infraVisible && 'opacity-100 translate-y-0'
            )}
          >
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Infrastructure
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              Built for Peace of Mind
            </h2>
          </div>

          <div
            className={cn(
              'flex flex-wrap justify-center gap-8 md:gap-16',
              'opacity-0 translate-y-8 transition-all duration-700 delay-200',
              infraVisible && 'opacity-100 translate-y-0'
            )}
          >
            {infrastructureItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="font-body text-sm text-muted-foreground">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section-padding bg-primary">
        <div
          className={cn(
            'container-wide text-center',
            'opacity-0 translate-y-8 transition-all duration-700',
            ctaVisible && 'opacity-100 translate-y-0'
          )}
        >
          <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-6">
            Experience Anaya in Person
          </h2>
          <p className="font-body text-primary-foreground/70 mb-8 max-w-md mx-auto">
            Schedule a private visit to witness the sanctuary firsthand.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold text-charcoal hover:bg-gold-light btn-glow"
          >
            <Link to="/contact">
              Schedule a Visit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
