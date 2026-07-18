import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Panel Banks', id: 'banks' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    onNavigate?.(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="Sri Sai Law Associates Logo"
            className="h-12 w-12 md:h-14 md:w-14"
          />
          <div className="flex flex-col leading-none">
            <h1 className="text-xl md:text-2xl font-serif font-bold">Sri Sai</h1>
            <p className="text-sm md:text-base font-sans font-semibold opacity-95">Law Associates</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium hover:text-accent transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => handleNavClick('contact')}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          >
            Schedule Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm border-t border-primary-foreground/10">
          <nav className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left py-2 px-3 text-sm font-medium hover:bg-primary-foreground/10 rounded transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('contact')}
              className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Schedule Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
