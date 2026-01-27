import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Shield, Leaf, Home, Sun, Users } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Private & Secure',
    description: 'Gated community with 24/7 security, ensuring peace of mind for your family.',
  },
  {
    icon: Leaf,
    title: 'Nature-Immersed Living',
    description: '60% open spaces with native flora, walking trails, and garden views from every villa.',
  },
  {
    icon: Home,
    title: 'Architectural Excellence',
    description: 'Clean lines, natural materials, and thoughtful orientations that embrace light and breeze.',
  },
  {
    icon: Sun,
    title: 'Sustainable by Design',
    description: 'Rainwater harvesting, solar integration, and materials sourced with intention.',
  },
  {
    icon: Users,
    title: 'Community, Not Crowding',
    description: 'Just 42 families sharing amenities — intimate gatherings over anonymous neighbors.',
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
            'max-w-3xl mx-auto text-center mb-16 md:mb-24',
            'opacity-0 translate-y-8 transition-all duration-700',
            headerVisible && 'opacity-100 translate-y-0'
          )}
        >
          <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
            The Anaya Difference
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Built for Families Who
            <span className="text-primary"> Value Time</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Every detail at Anaya serves one purpose: giving your family the space to live fully, 
            in a setting that feels both expansive and intimate.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={cn(
                  'group p-8 rounded-lg transition-all duration-500',
                  'hover:bg-card hover:shadow-soft',
                  'opacity-0 translate-y-8',
                  contentVisible && 'opacity-100 translate-y-0'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">
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
