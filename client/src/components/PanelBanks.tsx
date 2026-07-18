import { Badge } from '@/components/ui/badge';

export default function PanelBanks() {
  const banks = [
    'IDFC First Bank Ltd.',
    'Ujjivan Small Finance Bank Ltd.',
    'Jana Small Finance Bank Ltd.',
    'AU Small Finance Bank',
    'Motilal Oswal Home Finance Limited',
    'Centrum Housing Finance Ltd.',
    'Muthoot Homefin India Ltd.',
    'IKF Home Finance Ltd',
    'Altum Credo Home Finance Ltd',
    'Aadhar Home Finance Ltd',
    'PNB Housing Finance Limited',
    'Aditya Birla Capital Ltd.',
    'Hinduja Housing Finance Ltd.',
    'Varasakthi Housing Finance',
    'Swarna Pragathi Housing Finance',
    'Grihum Housing Finance Ltd.',
    'IIFL Finance Ltd.',
    'Cholamandalam Investment and Finance Company Ltd.',
    'Credit Access Grameen Ltd.',
    'Muthoot Fin Corp Ltd.',
    'Hiranandani Financial Services',
    'Unico Housing Finance Private Ltd.',
    'Criss Financial Ltd.',
    'UGRO Capital Ltd.',
    'MoneyBoxx Finance Ltd.',
    'IKF Finance Ltd.',
    'Saarathi Finance & Credit Private Ltd.',
    'Western Capital Advisors Pvt. Ltd.',
    'JM Financial Home Loans Limited',
    'Svatantra Micro Housing Finance Corporation Limited',
    'Vridhi Home Finance Limited',
    'Wonder Home Finance',
    'Godrej Housing Finance Ltd.',
    'Pirmal Capital Ltd.',
    'ICICI LOMBARD GIC',
  ];

  return (
    <section id="banks" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="mb-16 accent-line-left">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Panel Institutions
          </h2>
          <p className="text-lg text-foreground max-w-3xl">
            Trusted by 35+ leading financial institutions and banks across India for specialized legal advocacy, SARFAESI proceedings, and financial compliance services.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {banks.map((bank, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background rounded-lg hover:bg-muted transition-colors duration-200"
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="text-secondary-foreground font-medium">{bank}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">Specialization</h3>
            <p className="text-secondary-foreground mb-6">
              We provide specialized legal services including:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Badge className="bg-accent text-accent-foreground mt-1 flex-shrink-0">
                  SARFAESI
                </Badge>
                <span className="text-secondary-foreground">
                  Secured Creditor proceedings and possession recovery
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-accent text-accent-foreground mt-1 flex-shrink-0">
                  EP Cases
                </Badge>
                <span className="text-secondary-foreground">
                  Execution Petition follow-up and enforcement
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-accent text-accent-foreground mt-1 flex-shrink-0">
                  Legal Opinion
                </Badge>
                <span className="text-secondary-foreground">
                  Property title verification and due diligence
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-accent text-accent-foreground mt-1 flex-shrink-0">
                  Documentation
                </Badge>
                <span className="text-secondary-foreground">
                  Loan documentation and legal compliance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
