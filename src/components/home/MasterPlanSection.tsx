import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Home, Maximize, Trees, Bed } from 'lucide-react';

const masterPlanStats = [
  { label: 'Total Land Area', value: '18 Acres' },
  { label: 'Number of Villas', value: '42' },
  { label: 'Open Spaces', value: '60%+' },
  { label: 'Internal Roads', value: '30 ft wide' },
];

const villaTypes = [
  {
    name: 'Aravali',
    builtUp: '3,200',
    plotSize: '4,500',
    bedrooms: 3,
    features: 'Private garden, covered parking, sit-out terrace',
  },
  {
    name: 'Sahyadri',
    builtUp: '4,100',
    plotSize: '6,000',
    bedrooms: 4,
    features: 'Large garden, double-height living, private deck',
  },
  {
    name: 'Nilgiri',
    builtUp: '5,200',
    plotSize: '8,000',
    bedrooms: 5,
    features: 'Corner plot, landscaped garden, home office, pool provision',
  },
];

export function MasterPlanSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div
          className={cn(
            'text-center mb-16',
            'opacity-0 translate-y-8 transition-all duration-700',
            isVisible && 'opacity-100 translate-y-0'
          )}
        >
          <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
            The Blueprint
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Master Plan & <span className="text-primary">Villa Types</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Every villa is positioned to maximize privacy, natural light, and garden views. 
            Wide internal roads ensure a quiet, pedestrian-friendly environment.
          </p>
        </div>

        {/* Master Plan Placeholder */}
        <div
          className={cn(
            'relative aspect-[16/9] rounded-lg overflow-hidden mb-12 bg-card border border-border',
            'opacity-0 scale-95 transition-all duration-700 delay-200',
            isVisible && 'opacity-100 scale-100'
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold/5 flex items-center justify-center">
            <div className="text-center p-8">
              <Trees className="w-16 h-16 text-primary/30 mx-auto mb-4" />
              <p className="font-display text-2xl text-foreground/50 mb-2">
                Master Layout
              </p>
              <p className="font-body text-sm text-muted-foreground">
                High-resolution master plan coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Master Plan Stats */}
        <div
          className={cn(
            'grid grid-cols-2 md:grid-cols-4 gap-6 mb-16',
            'opacity-0 translate-y-4 transition-all duration-500 delay-300',
            isVisible && 'opacity-100 translate-y-0'
          )}
        >
          {masterPlanStats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg bg-background border border-border"
            >
              <p className="font-display text-2xl md:text-3xl text-primary mb-2">
                {stat.value}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Villa Types Header */}
        <div
          className={cn(
            'text-center mb-10',
            'opacity-0 translate-y-4 transition-all duration-500 delay-400',
            isVisible && 'opacity-100 translate-y-0'
          )}
        >
          <h3 className="font-display text-3xl text-foreground mb-3">
            Choose Your Home
          </h3>
          <p className="font-body text-muted-foreground">
            Three villa configurations designed for different family needs
          </p>
        </div>

        {/* Villa Type Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {villaTypes.map((villa, index) => (
            <div
              key={villa.name}
              className={cn(
                'luxury-card p-8 rounded-lg',
                'opacity-0 translate-y-8 transition-all duration-500',
                isVisible && 'opacity-100 translate-y-0'
              )}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              <h4 className="font-display text-2xl text-foreground mb-6">
                {villa.name}
              </h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Home className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Built-up Area</p>
                    <p className="font-display text-lg text-foreground">{villa.builtUp} sq.ft</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Maximize className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Plot Size</p>
                    <p className="font-display text-lg text-foreground">{villa.plotSize} sq.ft</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bed className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Bedrooms</p>
                    <p className="font-display text-lg text-foreground">{villa.bedrooms} BHK</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="font-body text-sm text-muted-foreground">
                  {villa.features}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className={cn(
            'text-center font-body text-xs text-muted-foreground mt-10',
            'opacity-0 transition-opacity duration-500 delay-700',
            isVisible && 'opacity-100'
          )}
        >
          * Specifications are indicative. Actual measurements may vary slightly.
        </p>
      </div>
    </section>
  );
}
