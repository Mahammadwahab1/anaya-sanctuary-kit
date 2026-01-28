import { Link } from 'react-router-dom';
import { ArrowRight, Clock, GraduationCap, Stethoscope, Building2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const distances = [
  {
    icon: Clock,
    title: '15 mins to ORR',
    description: 'Quick access to the outer ring road',
  },
  {
    icon: GraduationCap,
    title: '10 mins to Schools',
    description: 'Top CBSE, ICSE, and international schools nearby',
  },
  {
    icon: Stethoscope,
    title: '12 mins to Hospitals',
    description: 'Multi-specialty hospitals within easy reach',
  },
  {
    icon: Building2,
    title: '20 mins to IT Hubs',
    description: 'Major tech parks and business centers',
  },
];

export function LocationSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <p
              className={cn(
                'font-body text-gold text-sm tracking-[0.3em] uppercase mb-4',
                'opacity-0 translate-y-4 transition-all duration-500',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              Location
            </p>
            <h2
              className={cn(
                'font-display text-4xl md:text-5xl mb-6',
                'opacity-0 translate-y-4 transition-all duration-500 delay-100',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              Connected, Yet
              <span className="text-gold"> Secluded</span>
            </h2>
            <p
              className={cn(
                'font-body text-lg text-primary-foreground/80 leading-relaxed mb-10',
                'opacity-0 translate-y-4 transition-all duration-500 delay-200',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              Anaya is strategically positioned where urban convenience meets natural calm. 
              Everything you need is close by, yet home feels like a world away.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {distances.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={cn(
                      'flex gap-4',
                      'opacity-0 translate-y-4 transition-all duration-500',
                      isVisible && 'opacity-100 translate-y-0'
                    )}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-primary-foreground/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p
              className={cn(
                'font-body text-xs text-primary-foreground/50 mb-8',
                'opacity-0 transition-opacity duration-500 delay-700',
                isVisible && 'opacity-100'
              )}
            >
              * Travel times are approximate and may vary based on traffic conditions.
            </p>

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
                View Detailed Map
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Google Maps Embed */}
          <div
            className={cn(
              'relative aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden',
              'opacity-0 scale-95 transition-all duration-700 delay-300',
              isVisible && 'opacity-100 scale-100'
            )}
          >
            {/* Placeholder map - replace with actual coordinates */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56659780916!2d77.46612625!3d12.954280299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anaya Sanctuary Location"
              className="grayscale contrast-125 opacity-90"
            />
            <div className="absolute inset-0 pointer-events-none border border-gold/20 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
