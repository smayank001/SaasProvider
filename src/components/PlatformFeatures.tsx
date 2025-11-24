import { 
  Bot, 
  Network, 
  Eye, 
  Lock, 
  Wrench, 
  Database,
  Search,
  Zap,
  Users,
  Shield,
  Sparkles
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    category: "Multi-Agent Orchestration",
    icon: Network,
    items: [
      "Multi-agent collaboration",
      "Supervisor agents",
      "Agent memory (long + short term)",
      "Agent tools",
      "Guided full-autonomy"
    ]
  },
  {
    category: "Search & Data AI",
    icon: Search,
    items: [
      "100+ connectors",
      "Agentic RAG",
      "Teachability",
      "Knowledge graph + multi-vector",
      "No-code + pro-code tools"
    ]
  },
  {
    category: "Control & Observability",
    icon: Eye,
    items: [
      "Agent tracing",
      "AI agent insights",
      "Workflow analytics",
      "Event monitoring",
      "Audit logs"
    ]
  },
  {
    category: "AI Security & Governance",
    icon: Shield,
    items: [
      "Guardrails",
      "RBAC",
      "Versions",
      "Audit logs",
      "Enterprise security",
      "Compliance"
    ]
  },
  {
    category: "AI Engineering Tools",
    icon: Wrench,
    items: [
      "Prompt Studio",
      "Evaluation Studio",
      "Model Hub",
      "Model Factory"
    ]
  }
];

const PlatformFeatures = () => {
  return (
    <section id="platform" className="py-24 relative overflow-hidden bg-card">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Most Advanced <span className="text-gradient-primary">AI Agent Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create valuable AI agents and agentic workflows with confidence and ongoing control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="glass p-6 border-border/50 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 text-primary/10 animate-pulse">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 transition-colors">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;