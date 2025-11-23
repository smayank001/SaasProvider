import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.", {
      description: "Thank you for reaching out to us.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-blue/5 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Let's Build Something{" "}
            <span className="text-gradient-primary">Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch with us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="glass p-8 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-muted/50 border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-muted/50 border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="bg-muted/50 border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="bg-muted/50 border-border resize-none"
                />
              </div>

              <Button type="submit" variant="neon" size="lg" className="w-full group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="glass p-6 border-border/50 hover:shadow-glow-primary transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    We'll respond within 24 hours
                  </p>
                  <a
                    href="mailto:hello@youragency.com"
                    className="text-primary hover:underline"
                  >
                    hello@youragency.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="glass p-6 border-border/50 hover:shadow-glow-secondary transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Mon-Fri from 9am to 6pm EST
                  </p>
                  <a
                    href="tel:+15555551234"
                    className="text-secondary hover:underline"
                  >
                    +1 (555) 555-1234
                  </a>
                </div>
              </div>
            </Card>

            <Card className="glass p-6 border-border/50 hover:shadow-glow-accent transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Come say hello at our office
                  </p>
                  <p className="text-muted-foreground">
                    123 Digital Avenue, Suite 456<br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass p-6 border-border/50 bg-gradient-primary/10">
              <h3 className="font-semibold text-xl mb-3 text-gradient-primary">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-4">
                Book a free consultation call to discuss your vision and get a custom quote.
              </p>
              <Button variant="cyber" size="lg" className="w-full">
                Book Free Consultation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
