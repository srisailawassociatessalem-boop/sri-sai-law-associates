import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to send");
      }
      toast.success("Thank you! Your consultation request has been sent.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
    catch (error) {
      toast.error("Failed to send request. Please try again.");
      console.error(error);
    }
    finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      name: 'Head Office',
      address: 'D.No.8/6, Thangam Complex, Ragavan Street, Swarnapuri, Salem - 636 004, Tamil Nadu',
      phone: '0427-7965972',
      mobile: '09944306768',
      email: 'srisailawassociates.salem@gmail.com',
      hours: 'Monday - Friday: 10:00 AM - 8:30 PM',
    },
    {
      name: 'Branch Office',
      address: 'D.No.104/1B, Sri Murugan Complex, Near Madha Medical, Vinayagapuram, Attur, Salem - 636 102, Tamil Nadu',
      phone: '04282-252192',
      mobile: '09944306768',
      email: 'srisailawassociates.attur@gmail.com',
      hours: 'Monday - Friday: 10:00 AM - 8:30 PM',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="mb-16 accent-line-left">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary-foreground">Schedule Your Consultation</h2>
          <p className="text-lg text-primary-foreground max-w-3xl">
            Contact Sri Sai Law Associates for expert legal counsel. Our team is ready to assist with your legal matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-primary-foreground text-foreground border-0 shadow-lg p-8">
            <h3 className="text-2xl font-serif font-bold mb-6">Consultation Request</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="border-border focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="border-border focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="border-border focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your legal matter..."
                  required
                  rows={5}
                  className="border-border focus:ring-accent"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 h-auto"
              >
                {isSubmitting ? 'Submitting...' : 'Request Consultation'}
              </Button>
            </form>
          </Card>

          {/* Office Information */}
          <div className="space-y-6">
            {offices.map((office, index) => (
              <Card key={index} className="bg-primary-foreground/10 border border-primary-foreground/20 p-6">
                <h3 className="text-xl font-serif font-bold mb-4 text-primary-foreground">
                  {office.name}
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                    <p className="text-primary-foreground/90 text-sm leading-relaxed">
                      {office.address}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div className="text-sm">
                      <p className="text-primary-foreground/90">Office: {office.phone}</p>
                      <p className="text-primary-foreground/90">Mobile: {office.mobile}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="text-accent flex-shrink-0 mt-1" size={20} />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="text-accent flex-shrink-0 mt-1" size={20} />
                    <p className="text-primary-foreground/90 text-sm">{office.hours}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Additional Contact */}
            <Card className="bg-accent text-accent-foreground p-6">
              <h4 className="font-serif font-bold text-lg mb-2">Emergency Legal Assistance</h4>
              <p className="text-sm mb-4">
                For urgent legal matters, please contact us directly at the phone numbers above.
              </p>
              <a
                href="tel:09944306768"
                className="inline-block bg-accent-foreground text-accent font-semibold px-4 py-2 rounded hover:bg-accent-foreground/90 transition-colors"
              >
                Call Now
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
