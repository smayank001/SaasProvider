import { Code, MessageCircle, Workflow, Search, Shield, Zap, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const solutions = [
  {
    icon: Code,
    title: "AI for Work",
    description: "Connect to your business systems, understand your data and workflows, and activate agentic RAG search, to automate and orchestrate AI agents with precision.",
  },
  {
    icon: MessageCircle,
    title: "AI for Service",
    description: "Reimagine quality service with AI agents who respond clearly in real time, while providing human agents with the necessary tools to handle inquiries with skill and confidence.",
  },
  {
    icon: Workflow,
    title: "AI for Process",
    description: "Streamline business operations with autonomous AI agents that orchestrate complex workflows, optimize processes, and deliver measurable ROI at enterprise scale.",
  },
  {
    icon: Search,
    title: "Enterprise Search & Data AI",
    description: "Our search and data AI layer delivers powerful information retrieval with intelligence and flexibility built in, with 100+ pre-built search connectors and native support for agentic RAG.",
  },
  {
    icon: Shield,
    title: "AI Security & Governance",
    description: "Enterprise guardrails to enforce policies, meet regulatory standards, and ensure responsible AI behavior at scale, using compliance frameworks, robust access controls, and ethical safeguards.",
  },
  {
    icon: Zap,
    title: "AI Engineering Tools",
    description: "The Kore.ai Agent Platform offers three tools to speed development: Model Hub connects various AI models, Prompt Studio optimizes prompts, and Evaluation Studio provides real-time performance insights.",
  },
];

const AISolutions = () => {
  return (
    <section id="ai-solutions" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our <span className="text-gradient-primary">AI Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI Agents and agentic workflows that embed AI where the value is.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="group relative glass p-6 hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 transform group-hover:rotate-3">
                    <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="pt-2">
                    <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 transition-colors">
                      Learn more
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AISolutions;