import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import TypewriterText from "@/components/TypewriterText";

const prompts = [
  "Creating intelligent AI agents for enterprise workflows...",
  "Optimizing business processes with machine learning...",
  "Building conversational interfaces for customer service...",
  "Deploying scalable cloud solutions for modern businesses...",
  "Implementing secure data analytics platforms...",
  "Designing intuitive user experiences for complex systems...",
  "Developing real-time collaboration tools for remote teams...",
  "Integrating IoT solutions for smart enterprise environments..."
];

const AnimatedHero = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPrompt((prev) => (prev + 1) % prompts.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Premium ripple gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CFE7FF] rounded-full blur-[120px] opacity-50 animate-pulse"></div>
        
        {/* Ripple waves */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#DDEBFF] rounded-full blur-[70px] opacity-60 animate-ping" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CFE7FF] rounded-full blur-[90px] opacity-40 animate-ping" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9BB8E0] rounded-full blur-[110px] opacity-25 animate-ping" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        
        {/* Soft highlights */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#FFFFFF] rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FFFFFF] rounded-full blur-[100px] opacity-30"></div>
        
        {/* Subtle floating elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#DDEBFF] rounded-full blur-[50px] opacity-50 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#CFE7FF] rounded-full blur-[60px] opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-4 border border-primary/20 animate-bounce">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium">5+ Years of Excellence • 100+ Projects Delivered</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Enterprise AI Solutions for <span className="text-gradient-primary">Modern Business</span>
          </h1>

          {/* Animated Prompt Display */}
          <div className="relative h-20 flex items-center justify-center">
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl px-6 py-4 shadow-lg">
                <p className="text-lg md:text-xl font-mono text-primary">
                  <TypewriterText text={prompts[currentPrompt]} speed={40} delay={2000} />
                </p>
              </div>
            </div>
          </div>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            The single AI ecosystem for your enterprise. Create valuable AI agents and agentic workflows with confidence and ongoing control.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="xl" variant="default" className="group px-8 hover:bg-primary/90">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="outline" className="px-8 hover:animate-bounce">
              Schedule Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2 animate-float" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-gradient-primary">500+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="space-y-2 animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-gradient-primary">10K+</div>
              <div className="text-sm text-muted-foreground">AI Agents Deployed</div>
            </div>
            <div className="space-y-2 animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-gradient-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="space-y-2 animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-gradient-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default AnimatedHero;