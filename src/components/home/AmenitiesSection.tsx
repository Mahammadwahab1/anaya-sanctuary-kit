import { Link } from 'react-router-dom';
import { ArrowRight, TreePine, Flower2, Wind, Building, Users, Baby, Shield, Zap, Cable } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const amenityCategories = [
  {
    title: 'Nature & Wellness',
    items: [
      { icon: TreePine, name: 'Landscaped Gardens', description: 'Native flora and shaded walkways' },
      { icon: Flower2, name: 'Walking Trails', description: 'Peaceful paths through greenery' },
      { icon: Wind, name: 'Meditation Spaces', description: 'Quiet corners for reflection' },
    ],
  },
  {
    title: 'Community',
    items: [
      { icon: Building, name: 'Clubhouse', description: 'Gatherings and celebrations' },
      { icon: Users, name: 'Seating Zones', description: 'Covered areas for conversations' },
      { icon: Baby, name: 'Kids Play Area', description: 'Safe, engaging play spaces' },
    ],
  },
  {
    title: 'Safety & Infrastructure',
    items: [
      { icon: Shield, name: 'Gated Entry', description: '24/7 security and access control' },
      { icon: Zap, name: 'Power Backup', description: 'Uninterrupted electricity supply' },
      { icon: Cable, name: 'Underground Utilities', description: 'Clean, modern infrastructure' },
    ],
  },
];

export function AmenitiesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-background">
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
            Life at Anaya
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Thoughtfully <span className="text-primary">Curated</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Amenities that enhance daily life without excess. Everything you need, nothing you don't.
          </p>
        </div>

        {/* Amenity Categories */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {amenityCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={cn(
                'opacity-0 translate-y-8 transition-all duration-700',
                isVisible && 'opacity-100 translate-y-0'
              )}
              style={{ transitionDelay: `${200 + categoryIndex * 150}ms` }}
            >
              <h3 className="font-display text-2xl text-foreground mb-6 pb-4 border-b border-border">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.name} className="flex gap-4">
                      <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display text-lg text-foreground mb-1">
                          {item.name}
                        </h4>
                        <p className="font-body text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={cn(
            'mt-16 text-center',
            'opacity-0 translate-y-4 transition-all duration-700 delay-500',
            isVisible && 'opacity-100 translate-y-0'
          )}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="btn-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link to="/amenities">
              See All Amenities
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
