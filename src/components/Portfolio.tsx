import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack online marketplace with 10,000+ products",
    color: "from-neon-blue/20 to-neon-cyan/20",
  },
  {
    title: "Healthcare CRM",
    category: "Custom Software",
    description: "Patient management system for 50+ clinics",
    color: "from-neon-purple/20 to-neon-blue/20",
  },
  {
    title: "Fitness Mobile App",
    category: "Mobile Development",
    description: "iOS & Android app with 50k+ downloads",
    color: "from-neon-cyan/20 to-neon-purple/20",
  },
  {
    title: "Real Estate Portal",
    category: "Web Development",
    description: "Property listing platform with advanced search",
    color: "from-neon-blue/20 to-neon-purple/20",
  },
  {
    title: "Restaurant Chain Branding",
    category: "Branding & Design",
    description: "Complete brand identity for 20+ locations",
    color: "from-neon-purple/20 to-neon-cyan/20",
  },
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    description: "Financial analytics platform for investors",
    color: "from-neon-cyan/20 to-neon-blue/20",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="text-gradient-secondary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming visions into digital masterpieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden glass border-border/50 cursor-pointer hover:shadow-glow-secondary transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 p-6 h-64 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient-primary transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
