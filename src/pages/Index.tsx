import { useState } from "react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";
import { ArrowRight, ExternalLink } from "lucide-react";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    {
      icon: "🤖",
      title: "Discord Bots",
      description: "Custom Discord bot development tailored to your server's needs",
    },
    {
      icon: "🌐",
      title: "Web Tools",
      description: "Custom web applications and platforms built for your business",
    },
    {
      icon: "🧩",
      title: "Browser Extensions",
      description: "Chrome, Firefox, and Edge extensions with custom functionality",
    },
    {
      icon: "⚙️",
      title: "Automations",
      description: "Workflow automation systems to save time and streamline processes",
    },
    {
      icon: "🧾",
      title: "Quick Fixes",
      description: "Fast bug fixes and urgent patches — 24-48 hour turnaround",
    },
    {
      icon: "🧠",
      title: "AI Integrations",
      description: "AI-powered features using GPT, Claude, and other platforms",
    },
    {
      icon: "📈",
      title: "Data Systems",
      description: "Database management, analytics, and data visualization platforms",
    },
    {
      icon: "💳",
      title: "Payment Systems",
      description: "Secure payment processing integration for your platform",
    },
  ];

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-glow-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto animate-fade-in">
          {/* Logo Placeholder */}
          <div className="mb-8 inline-block">
            <div className="w-24 h-24 bg-accent rounded-lg flex items-center justify-center text-4xl font-bold glow-effect">
              DS
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Professional Technology Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Custom Discord Bots • Web Tools • Automations • AI Integration
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToServices}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 glow-effect"
            >
              View Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Professional solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  onClick={() => handleServiceClick(service.title)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple process from start to finish
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Choose Your Service",
                description: "Select the service you need from our catalog",
              },
              {
                step: "2",
                title: "DM on Discord",
                description: "Contact me on Discord to discuss your needs",
              },
              {
                step: "3",
                title: "Get Quote",
                description: "I'll provide a custom price quote for your project",
              },
              {
                step: "4",
                title: "Make Payment",
                description: "Pay via CashApp once you approve the quote",
              },
              {
                step: "5",
                title: "Send Confirmation",
                description: "DM me the payment screenshot on Discord",
              },
              {
                step: "6",
                title: "Project Starts",
                description: "I'll begin working on your project immediately",
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="flex gap-6 items-start animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-xl font-bold glow-effect">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Started Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            DM me first before making any payments
          </p>
          
          <div className="bg-card border border-border rounded-lg p-8 mb-8 glow-effect">
            <div className="text-2xl font-mono mb-2">YourDiscord#0000</div>
            <p className="text-muted-foreground mb-6">
              Payment processed after quote approval via CashApp
            </p>
            
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 glow-effect"
              onClick={() => window.open("https://discord.com", "_blank")}
            >
              Contact Me on Discord
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="font-bold text-xl mb-2">Draunts Services™</div>
              <p className="text-muted-foreground">Professional Technology Solutions</p>
            </div>
            
            <div className="flex gap-6 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Discord</a>
              <a href="#" className="hover:text-foreground transition-colors">CashApp</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            </div>
          </div>
          
          <div className="text-center mt-8 text-muted-foreground">
            © 2025 Draunts Services™. All rights reserved.
          </div>
        </div>
      </footer>

      <ServiceModal 
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceName={selectedService}
      />
    </div>
  );
};

export default Index;
