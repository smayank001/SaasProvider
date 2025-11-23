import { Card } from "@/components/ui/card";
import { Target, Award, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to delivering exceptional results that exceed expectations and drive real business growth.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Every project is crafted with meticulous attention to detail, ensuring the highest standards of excellence.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. We work as an extension of your team to achieve your goals.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of the curve, leveraging cutting-edge technologies to create future-proof solutions.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-cyan/5 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Why Choose <span className="text-gradient-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not just another agency — we're your partners in digital success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Empowering Businesses Through{" "}
              <span className="text-gradient-secondary">Digital Excellence</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 5 years of industry experience and 100+ successful projects, we've 
              established ourselves as a trusted partner for businesses of all sizes. Our team 
              of expert designers, developers, and strategists work together to transform your 
              vision into reality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just build websites and apps — we create digital experiences that drive 
              results, engage users, and accelerate growth. Every project is a testament to our 
              commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="glass p-6 border-border/50 text-center">
              <div className="text-4xl font-bold text-gradient-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </Card>
            <Card className="glass p-6 border-border/50 text-center">
              <div className="text-4xl font-bold text-gradient-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </Card>
            <Card className="glass p-6 border-border/50 text-center">
              <div className="text-4xl font-bold text-gradient-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </Card>
            <Card className="glass p-6 border-border/50 text-center">
              <div className="text-4xl font-bold text-gradient-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="glass p-6 border-border/50 hover:shadow-glow-accent transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
