import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const amenities = [
  {
    chapter: '01',
    title: 'The Pool Pavilion',
    description: 'An infinity-edge pool overlooking the forest, with sun loungers and a poolside café for lazy afternoons.',
  },
  {
    chapter: '02',
    title: 'The Clubhouse',
    description: 'A gathering space for celebrations, with indoor-outdoor flow, a chef\'s kitchen, and private dining rooms.',
  },
  {
    chapter: '03',
    title: 'The Wellness Studio',
    description: 'Morning yoga, evening meditation. A quiet space for movement and stillness.',
  },
  {
    chapter: '04',
    title: 'The Garden Trails',
    description: 'Winding pathways through curated landscapes — walk, cycle, or simply pause beneath the trees.',
  },
  {
    chapter: '05',
    title: 'The Play Zone',
    description: 'Adventure awaits for children: climbing structures, sandpits, and open lawns for endless imagination.',
  },
];

export function AmenitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section ref={ref} className="section-padding bg-background overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div
          className={cn(
            'flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12',
            'opacity-0 translate-y-8 transition-all duration-700',
            isVisible && 'opacity-100 translate-y-0'
          )}
        >
          <div>
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Curated Chapters
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Life at <span className="text-primary">Anaya</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-border hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-border hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div
          ref={scrollRef}
          className={cn(
            'gallery-scroll -mx-6 px-6',
            'opacity-0 transition-opacity duration-700 delay-300',
            isVisible && 'opacity-100'
          )}
        >
          {amenities.map((amenity, index) => (
            <div
              key={amenity.chapter}
              className="w-[320px] md:w-[400px] flex-shrink-0"
            >
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/10 to-gold/5 mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-display text-8xl text-primary/10">
                    {amenity.chapter}
                  </span>
                </div>
              </div>
              <p className="font-body text-gold text-sm tracking-wider mb-2">
                Chapter {amenity.chapter}
              </p>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {amenity.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={cn(
            'mt-12 text-center',
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
              Explore All Amenities
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
