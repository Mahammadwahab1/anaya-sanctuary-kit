import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sanctuary', label: 'The Sanctuary' },
  { href: '/residences', label: 'Residences' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/location', label: 'Location' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'nav-blur border-b border-border/50 py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <img 
              src={logo} 
              alt="BrikBuild Constructions" 
              className={cn(
                'h-10 md:h-12 w-auto transition-all duration-300',
                !isScrolled && 'brightness-0 invert'
              )}
            />
            <span
              className={cn(
                'font-display text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300 hidden sm:block',
                isScrolled ? 'text-foreground' : 'text-white'
              )}
            >
              Anaya
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'font-body text-sm tracking-wide transition-colors duration-300 hover:text-gold',
                  isScrolled
                    ? 'text-foreground/80'
                    : 'text-white/90',
                  location.pathname === link.href && 'text-gold'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className={cn(
                'hidden md:flex btn-glow transition-all duration-300',
                isScrolled
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
              )}
            >
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Book a Visit
              </Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2 transition-colors duration-300',
                isScrolled ? 'text-foreground' : 'text-white'
              )}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-500',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-charcoal/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <nav className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'font-display text-3xl text-white/90 hover:text-gold transition-all duration-300',
                'opacity-0 animate-fade-up',
                location.pathname === link.href && 'text-gold'
              )}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            size="lg"
            className="mt-8 btn-glow bg-gold text-charcoal hover:bg-gold-light opacity-0 animate-fade-up"
            style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
          >
            <Link to="/contact">Book a Visit</Link>
          </Button>
        </nav>
      </div>
    </>
  );
}
