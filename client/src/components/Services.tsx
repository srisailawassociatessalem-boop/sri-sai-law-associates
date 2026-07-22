import { Card } from '@/components/ui/card';
import { Scale, FileText, Users, Building2, DollarSign, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scale,
      title: 'Civil Litigation',
      description: 'Expert representation in civil disputes, property matters, and contract litigation before various courts.',
      items: ['Property Disputes', 'Contract Issues', 'Succession Matters', 'Injunction Petitions'],
    },
    {
      icon: FileText,
      title: 'Legal Documentation',
      description: 'Comprehensive drafting and vetting of legal documents with precision and attention to detail.',
      items: ['Deeds & Conveyances', 'Agreements & MOUs', 'Power of Attorney', 'Lease Agreements'],
    },
    {
      icon: Users,
      title: 'Family Law',
      description: 'Sensitive and professional handling of family disputes and personal law matters.',
      items: ['Divorce Proceedings', 'Custody Matters', 'Inheritance Issues', 'Matrimonial Cases'],
    },
    {
      icon: Building2,
      title: 'Corporate Law',
      description: 'End-to-end corporate advisory covering title verification, public record searches, contract vetting, and institutional banking compliance.',
      items: ['Legal Scrutiny Report(LSR)', 'Legal Search Report', 'Document Vetting Report', 'Banking & NBFC Matters'],
    },
    {
      icon: DollarSign,
      title: 'SARFAESI Act',
      description: 'Specialized expertise in SARFAESI proceedings for secured creditors and financial institutions.',
      items: ['Possession Proceedings', 'Auction Management', 'Demand Notices', 'Recovery Actions'],
    },
    {
      icon: Shield,
      title: 'Notary Services',
      description: 'Authentic verification and legal execution of critical documents before official authorities.',
      items: ['Document Authentication', 'Statutory Attestation', 'Affidavits & Declarations', 'Notarial Certifications'],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="mb-16 accent-line-left">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary-foreground">Our Legal Services</h2>
          <p className="text-lg text-primary-foreground max-w-3xl">
            Comprehensive legal solutions across multiple practice areas, delivered with expertise and professionalism. We specialize in civil, criminal, and corporate law with a focus on result-oriented advocacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-primary-foreground text-foreground border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="mb-6 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-secondary-foreground">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-primary-foreground/10 rounded-lg p-8 md:p-12 border border-primary-foreground/20">
          <h3 className="text-2xl font-serif font-bold mb-6">Additional Services</h3>
          <div className="grid md:grid-cols-2 gap-6 text-primary-foreground/90">
            <div>
              <h4 className="font-semibold mb-3 text-accent">Notary Public Services</h4>
              <p>Government of India certified notary services for document attestation and authentication.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-accent">Legal Opinion</h4>
              <p>Expert legal opinions on property titles, transactions, and complex legal matters.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-accent">Property Due Diligence</h4>
              <p>Comprehensive investigation and verification of property documents before purchase.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-accent">Court Representation</h4>
              <p>Professional representation before various courts, tribunals, and legal forums.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
