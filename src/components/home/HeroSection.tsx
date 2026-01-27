import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-villa.jpg';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          transform: `translateY(-${parallaxOffset}px)`,
        }}
      >
        <img
          src={heroImage}
          alt="Anaya Villa Community at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container-wide flex flex-col justify-center pt-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="font-body text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            A BrikBuild Sanctuary
          </p>

          {/* Main Headline */}
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-medium leading-[1.1] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            Where Architecture
            <br />
            <span className="text-gold-light">Meets Forest</span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-body text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            An exclusive collection of 42 villa homes nestled within 18 acres of curated landscape. 
            Your family's sanctuary for the next decade — and beyond.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
          >
            <Button
              asChild
              size="lg"
              className="btn-glow bg-gold text-charcoal hover:bg-gold-light font-body text-base px-8"
            >
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Your Visit
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-body text-base px-8"
            >
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5 mr-2" />
                Speak with Us
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
      >
        <span className="font-body text-xs text-white/60 tracking-widest uppercase">
          Discover
        </span>
        <ArrowDown className="w-5 h-5 text-white/60 animate-float" />
      </div>
    </section>
  );
}
