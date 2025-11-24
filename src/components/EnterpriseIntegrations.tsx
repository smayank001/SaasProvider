import { Card } from "@/components/ui/card";

const integrations = [
  {
    title: "AI Models, ASR, TTS",
    description: "Connect to any AI model - commercial, open-source, or bring your own - for automatic speech recognition, text-to-speech, and natural language understanding.",
    image: "/placeholder.svg"
  },
  {
    title: "Channels",
    description: "Enable your AI agents to communicate with your employees or customers through their preferred channels – messengers, social media, email, live chat, voice, and more.",
    image: "/placeholder.svg"
  },
  {
    title: "Contact Centers",
    description: "Empower AI agents to work alongside your existing contact center solutions like NICE, Genesys, and Salesforce Service Cloud to deliver faster, context-aware support.",
    image: "/placeholder.svg"
  },
  {
    title: "Tool/Dialog Integrations",
    description: "Connect 100+ pre-built tools and dialog components that accelerate automation, decision-making, and workflow execution directly from within conversations.",
    image: "/placeholder.svg"
  },
  {
    title: "API Hooks & SDKs",
    description: "Extend and customize AI agent behavior using developer-friendly APIs and SDKs, tailor integrations to your exact business needs.",
    image: "/placeholder.svg"
  },
  {
    title: "Cloud / Infrastructure",
    description: "Connect any cloud service provider like AWS, Microsoft Azure, and Google Cloud, or integrate within your own environment, on premise or in the cloud.",
    image: "/placeholder.svg"
  }
];

const EnterpriseIntegrations = () => {
  return (
    <section id="integrations" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Enterprise <span className="text-gradient-primary">Integrations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform integrates easily across the enterprise with pre-built or bespoke connectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <Card 
              key={index} 
              className="glass p-6 border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{integration.title}</h3>
              <p className="text-muted-foreground mb-4">{integration.description}</p>
              
              <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 transition-colors">
                Explore More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseIntegrations;