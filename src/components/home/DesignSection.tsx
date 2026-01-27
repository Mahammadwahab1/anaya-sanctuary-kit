import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const designPillars = [
  {
    title: 'Architecture',
    description:
      'Contemporary forms that honor the land. Large glazing frames the forest, while deep overhangs provide shade and shelter.',
  },
  {
    title: 'Materials',
    description:
      'Local stone, aged teak, and brushed brass. Textures that age gracefully and tell stories over time.',
  },
  {
    title: 'Light',
    description:
      'Orientations optimized for morning sun in bedrooms, diffused north light in living spaces, and sunset views from terraces.',
  },
  {
    title: 'Airflow',
    description:
      'Cross-ventilation designed into every floor plan. Open courtyards create natural cooling, reducing dependence on AC.',
  },
];

export function DesignSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <div
              ref={headerRef}
              className={cn(
                'mb-12',
                'opacity-0 translate-y-8 transition-all duration-700',
                headerVisible && 'opacity-100 translate-y-0'
              )}
            >
              <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
                Design Language
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Thoughtful Details,
                <br />
                <span className="text-primary">Lasting Comfort</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                We believe architecture should disappear into experience. Every element at Anaya — 
                from the angle of a roof to the placement of a window — serves your daily life.
              </p>
            </div>

            <div
              ref={contentRef}
              className="space-y-8"
            >
              {designPillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={cn(
                    'border-l-2 border-gold pl-6',
                    'opacity-0 translate-x-4 transition-all duration-500',
                    contentVisible && 'opacity-100 translate-x-0'
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div
            className={cn(
              'relative aspect-[4/5] rounded-lg overflow-hidden',
              'opacity-0 scale-95 transition-all duration-700 delay-300',
              contentVisible && 'opacity-100 scale-100'
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="font-display text-6xl md:text-7xl text-primary/20 mb-4">
                  "
                </p>
                <p className="font-display text-2xl md:text-3xl text-foreground italic max-w-md leading-relaxed">
                  The best architecture is invisible — you simply feel at home.
                </p>
                <p className="font-body text-sm text-muted-foreground mt-6">
                  — Design Philosophy, BrikBuild
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
