import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import heroImage from '@/assets/hero-villa.jpg';
import heroVideo from '@/assets/hero-video.mp4';

const HERO_VIDEO_URL = heroVideo;

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;
  const hasVideo = Boolean(HERO_VIDEO_URL);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Video/Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          transform: `translateY(-${parallaxOffset}px)`,
        }}
      >
        {hasVideo && !prefersReducedMotion ? (
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            poster={heroImage}
            preload="metadata"
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
            <img
              src={heroImage}
              alt="Anaya Sanctuary luxury villas"
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <img
            src={heroImage}
            alt="Anaya Sanctuary luxury villas"
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container-wide flex flex-col justify-center pt-20">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-medium leading-[1.1] mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            Anaya Sanctuary
          </h1>

          {/* Subheadline */}
          <p
            className="font-display text-2xl md:text-3xl text-gold-light leading-snug mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            Luxury Villas Crafted in Harmony with Nature
          </p>

          {/* Tagline */}
          <p
            className="font-body text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            Limited premium villas · Thoughtfully designed · Peaceful gated living
          </p>

          {/* Single CTA */}
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
          >
            <Button
              asChild
              size="lg"
              className="btn-glow bg-gold text-charcoal hover:bg-gold-light font-body text-base px-8"
            >
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Private Site Visit
              </Link>
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
