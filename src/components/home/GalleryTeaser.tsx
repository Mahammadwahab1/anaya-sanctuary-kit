import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const galleryImages = [
  { id: 1, label: 'Villa Exterior' },
  { id: 2, label: 'Living Spaces' },
  { id: 3, label: 'Landscape' },
];

export function GalleryTeaser() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div
          className={cn(
            'text-center mb-12 md:mb-16',
            'opacity-0 translate-y-8 transition-all duration-700',
            isVisible && 'opacity-100 translate-y-0'
          )}
        >
          <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Visual Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            A Glimpse of <span className="text-primary">Anaya</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Renderings and captures that hint at the life awaiting you.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                'group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer',
                'opacity-0 translate-y-8 transition-all duration-500',
                isVisible && 'opacity-100 translate-y-0'
              )}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-muted to-gold/10 group-hover:scale-105 transition-transform duration-700" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl text-foreground/30 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {image.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={cn(
            'text-center',
            'opacity-0 translate-y-4 transition-all duration-500 delay-500',
            isVisible && 'opacity-100 translate-y-0'
          )}
        >
          <Button
            asChild
            size="lg"
            className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
