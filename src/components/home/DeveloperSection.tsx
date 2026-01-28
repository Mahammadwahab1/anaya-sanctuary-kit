import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Award, Users, Leaf, Shield } from 'lucide-react';

const credentials = [
  {
    icon: Award,
    title: '15+ Years',
    description: 'Building quality homes in the region',
  },
  {
    icon: Users,
    title: '500+ Families',
    description: 'Trust us with their homes',
  },
  {
    icon: Leaf,
    title: 'Sustainability First',
    description: 'Eco-conscious design approach',
  },
  {
    icon: Shield,
    title: 'Clear Title',
    description: 'Transparent documentation',
  },
];

export function DeveloperSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p
              className={cn(
                'font-body text-gold text-sm tracking-[0.3em] uppercase mb-4',
                'opacity-0 translate-y-4 transition-all duration-500',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              The Developer
            </p>
            <h2
              className={cn(
                'font-display text-4xl md:text-5xl text-foreground mb-6',
                'opacity-0 translate-y-4 transition-all duration-500 delay-100',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              About <span className="text-primary">BrikBuild</span>
            </h2>
            <div
              className={cn(
                'space-y-4 font-body text-muted-foreground leading-relaxed',
                'opacity-0 translate-y-4 transition-all duration-500 delay-200',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              <p>
                BrikBuild was founded with a simple belief: homes should be built to last, 
                with integrity at every step. For over fifteen years, we've focused on 
                creating spaces where families can truly settle and grow.
              </p>
              <p>
                We don't chase trends or cut corners. Every project we undertake reflects 
                our commitment to thoughtful design, quality construction, and transparent 
                dealings. Anaya Sanctuary is the culmination of everything we've learned — 
                our most considered project yet.
              </p>
            </div>

            <blockquote
              className={cn(
                'mt-8 pl-6 border-l-2 border-gold italic',
                'opacity-0 translate-y-4 transition-all duration-500 delay-300',
                isVisible && 'opacity-100 translate-y-0'
              )}
            >
              <p className="font-display text-xl text-foreground">
                "We build with intention — not just structures, but trust."
              </p>
              <cite className="font-body text-sm text-muted-foreground not-italic mt-2 block">
                — BrikBuild Philosophy
              </cite>
            </blockquote>
          </div>

          {/* Credentials Grid */}
          <div
            className={cn(
              'grid grid-cols-2 gap-6',
              'opacity-0 translate-y-8 transition-all duration-700 delay-300',
              isVisible && 'opacity-100 translate-y-0'
            )}
          >
            {credentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={cn(
                    'p-6 rounded-lg bg-background border border-border text-center',
                    'opacity-0 scale-95 transition-all duration-500',
                    isVisible && 'opacity-100 scale-100'
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
