import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import PanelBanks from '@/components/PanelBanks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Design Philosophy: Authoritative Elegance
 * - Deep Navy primary color for trust and authority
 * - Gold accents for prestige and achievement
 * - Serif typography for headings to evoke legal tradition
 * - Clean, structured layouts with intentional whitespace
 * - Professional yet approachable aesthetic
 */

export default function Home() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero onContactClick={handleContactClick} />
        <About />
        <Services />
        <PanelBanks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
