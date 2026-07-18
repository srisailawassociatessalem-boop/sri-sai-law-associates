import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    'Civil, Criminal & Corporate Law Expertise',
    'Property Litigation Specialist',
    'Family Dispute Resolution',
    'Legal Documentation & Drafting',
    'Notary Public Services',
    'SARFAESI Act Specialist',
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="accent-line-left order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              About Sri Sai Law Associates
            </h2>

            <p className="text-lg text-secondary-foreground mb-6 leading-relaxed">
              Founded in 2009 by E. Thiyagarajan, B.A., B.L., Sri Sai Law Associates has established itself as a premier legal firm in Salem, Tamil Nadu. With nearly two decades of experience, we provide comprehensive legal services across civil, criminal, and corporate domains.
            </p>

            <p className="text-base text-secondary-foreground mb-8 leading-relaxed">
              Our team is dedicated to delivering result-oriented advocacy with unwavering integrity and professionalism. We serve clients from our Head Office in Swarnapuri and Branch Office in Attur, handling everything from property transactions to complex litigation.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-secondary-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="relative order-1 md:order-2">
            <img
              src="/images/main.png"
              alt="Sri Sai Law Associates Office"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-lg -z-10" />
          </div>
        </div>

        {/* Founder Info */}
        <Card className="mt-16 bg-card border-0 shadow-lg">
          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              E. Thiyagarajan - Founder & Principal Advocate
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-3">Education</h4>
                <ul className="space-y-2 text-secondary-foreground">
                  <li>B.L. - Dr. Ambedkar Law University, Central Law College, Salem (2005-2008)</li>
                  <li>B.A. Economics - Periyar University, Sowdeswari College, Salem (2002-2005)</li>
                  <li>HSC - Bharathi Vidyalaya Higher Secondary School, Salem (2002)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Professional Background</h4>
                <ul className="space-y-2 text-secondary-foreground">
                  <li>Practiced with T.S. Ramamurthi Advocate (2009-2014)</li>
                  <li>Branch Legal Manager, Equitas Small Finances Bank Ltd. (2015-2017)</li>
                  <li>Proprietor, Sri Sai Law Associates (2017-Present)</li>
                  <li>Panel Advocate for 35+ Financial Institutions</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
