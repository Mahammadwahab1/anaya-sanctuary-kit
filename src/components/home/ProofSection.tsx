import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Building2, Trees, Award, Calendar } from 'lucide-react';

const proofItems = [
  {
    icon: Building2,
    label: 'Villa Homes',
    value: '42',
    description: 'Thoughtfully designed residences',
  },
  {
    icon: Trees,
    label: 'Acres of Landscape',
    value: '18',
    description: 'Curated natural sanctuary',
  },
  {
    icon: Award,
    label: 'Years of Excellence',
    value: '15+',
    description: 'BrikBuild legacy',
  },
  {
    icon: Calendar,
    label: 'Possession',
    value: '2026',
    description: 'On-schedule delivery',
  },
];

export function ProofSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 bg-primary"
    >
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {proofItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={cn(
                  'text-center lg:border-r lg:last:border-r-0 border-white/10 px-4',
                  'opacity-0 transition-all duration-700',
                  isVisible && 'opacity-100'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <p className="font-display text-4xl md:text-5xl text-primary-foreground mb-2">
                  {item.value}
                </p>
                <p className="font-body text-sm text-gold tracking-wide uppercase mb-1">
                  {item.label}
                </p>
                <p className="font-body text-xs text-primary-foreground/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
