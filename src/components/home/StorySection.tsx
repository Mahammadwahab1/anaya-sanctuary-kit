import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import villaExterior from '@/assets/villa-exterior.jpg';

const storyPoints = [
  {
    title: 'Low Density Living',
    description: 'Just 42 families sharing 18 acres of thoughtfully planned space.',
  },
  {
    title: 'Privacy & Space',
    description: 'Generous setbacks, mature landscaping, and homes that breathe.',
  },
  {
    title: 'Nature at Your Door',
    description: 'Wake to birdsong. Walk among trees. Feel the calm in every moment.',
  },
  {
    title: 'Away from Chaos',
    description: 'Close enough to the city, far enough to feel truly at peace.',
  },
];

export function StorySection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={cn(
              'relative aspect-[4/3] rounded-lg overflow-hidden',
              'opacity-0 scale-95 transition-all duration-700',
              isVisible && 'opacity-100 scale-100'
            )}
          >
            <img
              src={villaExterior}
              alt="Anaya Sanctuary villa exterior with lush landscaping"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <p
              className={cn(
                'font-body text-gold text-sm tracking-[0.3em] uppercase mb-4',
                'opacity-0 translate-y-4 transition-all duration-500',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              Our Philosophy
            </p>
            <h2
              className={cn(
                'font-display text-4xl md:text-5xl text-foreground mb-6',
                'opacity-0 translate-y-4 transition-all duration-500 delay-100',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              A Sanctuary,
              <br />
              <span className="text-primary">Not Just a Home</span>
            </h2>
            <p
              className={cn(
                'font-body text-lg text-muted-foreground leading-relaxed mb-10',
                'opacity-0 translate-y-4 transition-all duration-500 delay-200',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              Anaya isn't about square footage or specifications. It's about mornings that feel 
              unhurried, evenings spent under open skies, and a home that grows with your family 
              for decades to come.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {storyPoints.map((point, index) => (
                <div
                  key={point.title}
                  className={cn(
                    'p-5 rounded-lg bg-secondary/50 border border-border/50',
                    'opacity-0 translate-y-4 transition-all duration-500',
                    isVisible && 'opacity-100 translate-y-0'
                  )}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <h3 className="font-display text-lg text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
