import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "Transformed our website into a modern, high-converting platform. Sales increased by 300% in 3 months.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, HealthWell",
    content: "Expertise in design and development is unmatched. Delivered our CRM ahead of schedule and flawless.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, StyleHub",
    content: "Handled everything perfectly. Our brand identity is now stronger than ever with a customer-loved site!",
    rating: 5,
  },
  {
    name: "David Park",
    role: "CTO, FinanceFlow",
    content: "Technical excellence meets creative brilliance. Built our fintech platform with security and scalability.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Client <span className="text-gradient-primary">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="glass border-border/50 p-6 hover:shadow-glow-primary transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-muted-foreground text-xs">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
