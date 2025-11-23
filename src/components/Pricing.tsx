import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,499",
    description: "Perfect for small businesses and startups",
    features: [
      "5-page responsive website",
      "Modern UI/UX design",
      "Mobile optimization",
      "Basic SEO setup",
      "Contact form integration",
      "30 days support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$5,999",
    description: "Ideal for growing businesses",
    features: [
      "15-page custom website",
      "Premium design & branding",
      "CMS integration",
      "Advanced SEO optimization",
      "E-commerce functionality",
      "Analytics dashboard",
      "90 days support",
      "2 rounds of revisions",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited pages",
      "Custom web application",
      "Advanced integrations",
      "Dedicated project manager",
      "Priority support",
      "Training & documentation",
      "12 months maintenance",
      "Unlimited revisions",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Simple, <span className="text-gradient-secondary">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative glass p-8 border-border/50 transition-all duration-300 hover:shadow-glow-primary ${
                plan.highlighted
                  ? "scale-105 shadow-glow-secondary border-primary/50"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gradient-primary">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/project</span>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "neon" : "neonOutline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
