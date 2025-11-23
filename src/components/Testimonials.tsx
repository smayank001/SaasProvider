import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "Absolutely phenomenal work! They transformed our outdated website into a modern, high-converting platform. Our sales increased by 300% in just 3 months.",
    rating: 5,
    company: "TechStart Inc",
  },
  {
    name: "Michael Chen",
    role: "Founder, HealthWell",
    content: "The team's expertise in both design and development is unmatched. They delivered our healthcare CRM ahead of schedule and it's been flawless.",
    rating: 5,
    company: "HealthWell",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, StyleHub",
    content: "From branding to web development, they handled everything perfectly. Our brand identity is now stronger than ever, and our customers love the new site!",
    rating: 5,
    company: "StyleHub",
  },
  {
    name: "David Park",
    role: "CTO, FinanceFlow",
    content: "Technical excellence meets creative brilliance. They built our fintech platform with security and scalability in mind. Couldn't ask for better partners.",
    rating: 5,
    company: "FinanceFlow",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-purple/5 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What Our <span className="text-gradient-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass border-border/50 p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-4 left-4 w-16 h-16 text-primary/20" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary"></div>
                <div>
                  <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
