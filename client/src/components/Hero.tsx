import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <div className="mb-6 inline-block">
            <span className="text-accent font-semibold text-sm md:text-base uppercase tracking-wider">
              Trusted Legal Advocacy
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            Expert Legal Counsel for Your Rights
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl leading-relaxed">
            Sri Sai Law Associates brings 17+ years of experience in civil, criminal, and corporate law. We deliver result-oriented advocacy with integrity and professionalism.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={onContactClick}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8 py-6 h-auto group"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>

            <Button
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold px-8 py-6 h-auto"
            >
              Learn More
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-primary-foreground/20">
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-2">17+</div>
              <p className="text-sm md:text-base text-primary-foreground/80">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-2">35+</div>
              <p className="text-sm md:text-base text-primary-foreground/80">Panel Institutions</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-2">2</div>
              <p className="text-sm md:text-base text-primary-foreground/80">Office Locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
