import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { TreePine, BadgeCheck, Compass, FileText, Users } from 'lucide-react';

const benefits = [
  {
    icon: TreePine,
    title: 'Low Density Planning',
    description: 'Only 42 villas across 18 acres — space to breathe, room to grow.',
  },
  {
    icon: BadgeCheck,
    title: 'Premium Specifications',
    description: 'Quality materials, superior finishes, and attention to every detail.',
  },
  {
    icon: Compass,
    title: 'Thoughtful Design',
    description: 'Orientations optimized for light, ventilation, and garden views.',
  },
  {
    icon: FileText,
    title: 'Clear Documentation',
    description: 'Transparent title, proper approvals, and straightforward dealings.',
  },
  {
    icon: Users,
    title: 'Peaceful Community',
    description: 'Like-minded families who value privacy, nature, and quality living.',
  },
];

export function WhyAnayaSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            'max-w-3xl mx-auto text-center mb-16 md:mb-20',
            'opacity-0 translate-y-8 transition-all duration-700',
            headerVisible && 'opacity-100 translate-y-0'
          )}
        >
          <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
            The Difference
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Why Choose
            <span className="text-primary"> Anaya Sanctuary?</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            In a market full of promises, Anaya delivers substance. Here's what sets us apart.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={cn(
                  'group p-8 rounded-lg bg-secondary/50 border border-border/50 transition-all duration-500',
                  'hover:bg-card hover:border-gold/30 hover:shadow-soft',
                  'opacity-0 translate-y-8',
                  contentVisible && 'opacity-100 translate-y-0'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
