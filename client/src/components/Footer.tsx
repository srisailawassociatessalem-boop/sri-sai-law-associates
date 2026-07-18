import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="Sri Sai Law Associates"
                className="h-10 w-10"
              />
              <div>
                <h4 className="font-serif font-bold text-lg">Sri Sai</h4>
                <p className="text-sm font-semibold opacity-90">Law Associates</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Premier legal services in Salem since 2009. Committed to delivering result-oriented advocacy with integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#banks" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Panel Banks
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-primary-foreground/80">Civil Litigation</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Criminal Defense</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Legal Documentation</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">SARFAESI Proceedings</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Notary Services</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <Phone size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80">0427-7965972</p>
                  <p className="text-primary-foreground/80">09944306768</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:Srisailawassociates.salem@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Srisailawassociates.salem@gmail.com
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <p className="text-primary-foreground/80 text-xs leading-relaxed">
                  Swarnapuri, Salem, Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; {currentYear} Sri Sai Law Associates. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
