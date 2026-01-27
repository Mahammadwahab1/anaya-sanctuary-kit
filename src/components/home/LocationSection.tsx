import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, TreePine, Building } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const locationBenefits = [
  {
    icon: Clock,
    title: '20 Minutes to City Center',
    description: 'Close enough to stay connected, far enough to feel away.',
  },
  {
    icon: TreePine,
    title: 'Forest Buffer Zone',
    description: 'Protected greenery on three sides ensures lasting privacy.',
  },
  {
    icon: Building,
    title: 'Emerging Tech Corridor',
    description: 'IT parks and business hubs within easy commute distance.',
  },
  {
    icon: MapPin,
    title: 'Premium Neighborhood',
    description: 'Surrounded by established communities and quality infrastructure.',
  },
];

export function LocationSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p
              className={cn(
                'font-body text-gold text-sm tracking-[0.3em] uppercase mb-4',
                'opacity-0 translate-y-4 transition-all duration-500',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              Strategic Location
            </p>
            <h2
              className={cn(
                'font-display text-4xl md:text-5xl mb-6',
                'opacity-0 translate-y-4 transition-all duration-500 delay-100',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              The Best of
              <span className="text-gold"> Both Worlds</span>
            </h2>
            <p
              className={cn(
                'font-body text-lg text-primary-foreground/80 leading-relaxed mb-10',
                'opacity-0 translate-y-4 transition-all duration-500 delay-200',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              Anaya is positioned where convenience meets calm. Urban amenities when you need them, 
              natural serenity when you want it.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {locationBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className={cn(
                      'flex gap-4',
                      'opacity-0 translate-y-4 transition-all duration-500',
                      isVisible && 'opacity-100 translate-y-0'
                    )}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg mb-1">
                        {benefit.title}
                      </h3>
                      <p className="font-body text-sm text-primary-foreground/60">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              asChild
              size="lg"
              className={cn(
                'btn-glow bg-gold text-charcoal hover:bg-gold-light',
                'opacity-0 translate-y-4 transition-all duration-500 delay-700',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              <Link to="/location">
                View on Map
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Map Placeholder */}
          <div
            className={cn(
              'relative aspect-square rounded-lg overflow-hidden',
              'opacity-0 scale-95 transition-all duration-700 delay-300',
              isVisible && 'opacity-100 scale-100'
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-primary/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                <p className="font-display text-2xl text-primary-foreground">
                  Interactive Map
                </p>
                <p className="font-body text-sm text-primary-foreground/60 mt-2">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
