import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";
import Navigation from "@/components/Navigation";
import { ArrowRight, ExternalLink } from "lucide-react";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({ name: "", icon: "", description: "" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      icon: "🤖",
      title: "Discord Bots",
      description: "Custom bot development with advanced features and seamless integration",
    },
    {
      icon: "🌐",
      title: "Web Tools",
      description: "Full-stack web applications built with modern frameworks and best practices",
    },
    {
      icon: "🧩",
      title: "Browser Extensions",
      description: "Cross-browser extensions with powerful functionality and clean interfaces",
    },
    {
      icon: "⚙️",
      title: "Automations",
      description: "Workflow automation systems that save time and eliminate repetitive tasks",
    },
    {
      icon: "🧾",
      title: "Quick Fixes",
      description: "Rapid bug fixes and patches delivered in 24-48 hours when you need them most",
    },
    {
      icon: "🧠",
      title: "AI Integrations",
      description: "Cutting-edge AI features powered by GPT-4, Claude, and custom models",
    },
    {
      icon: "📈",
      title: "Data Systems",
      description: "Scalable databases, analytics platforms, and data visualization dashboards",
    },
    {
      icon: "💳",
      title: "Payment Systems",
      description: "Secure payment processing with Stripe, PayPal, and cryptocurrency support",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Service",
      description: "Browse our catalog and select what you need",
    },
    {
      number: "02",
      title: "Contact on Discord",
      description: "DM me to discuss your project requirements",
    },
    {
      number: "03",
      title: "Get Custom Quote",
      description: "Receive a tailored price based on your needs",
    },
    {
      number: "04",
      title: "Approve & Pay",
      description: "Complete payment via CashApp once approved",
    },
    {
      number: "05",
      title: "Send Confirmation",
      description: "DM payment screenshot for verification",
    },
    {
      number: "06",
      title: "Project Begins",
      description: "Work starts immediately after confirmation",
    },
  ];

  const handleServiceClick = (serviceName: string, serviceIcon: string, serviceDescription: string) => {
    setSelectedService({ name: serviceName, icon: serviceIcon, description: serviceDescription });
    setModalOpen(true);
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated geometric background with parallax */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
          <div 
            className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-white/5 rounded-full blur-3xl animate-float" 
            style={{ animationDelay: "2s" }} 
          />
          <div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" 
            style={{ animationDelay: "4s" }} 
          />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-12 inline-block animate-fade-in">
            <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center text-5xl font-black border-2 border-white/20 glow-effect">
              DS
            </div>
          </div>

          {/* Main headline with gradient shimmer */}
          <h1 
            className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-gradient text-gradient-animate">
              DRAUNTS SERVICES™
            </span>
          </h1>
          
          {/* Subheading */}
          <p 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Professional Technology Solutions Built for Excellence
          </p>

          {/* Services line with dividers */}
          <div 
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-gray-400 text-sm md:text-base lg:text-lg mb-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <span>Discord Bots</span>
            <span className="text-white/20">•</span>
            <span>Web Tools</span>
            <span className="text-white/20">•</span>
            <span>AI Integration</span>
            <span className="text-white/20">•</span>
            <span>Automations</span>
          </div>

          {/* CTA Button */}
          <div 
            className="animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button 
              size="lg" 
              onClick={scrollToServices}
              className="bg-white text-black hover:bg-white/90 text-xl px-12 py-8 font-bold glow-effect-strong animate-glow-pulse transition-all duration-300 hover:scale-105"
            >
              Explore Services
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              Premium Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Professional solutions tailored to your exact requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                  onClick={() => handleServiceClick(service.title, service.icon, service.description)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              How It Works
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              Simple process from start to finish
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center animate-fade-in-up ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="card-premium border-glow rounded-2xl p-8 inline-block">
                      <div className="text-6xl md:text-8xl font-black text-gradient mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-lg">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center glow-effect z-10">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  
                  <div className="flex-1 md:block hidden" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
            Ready to Start?
          </h2>
          
          <div className="card-premium border-glow rounded-3xl p-12 mb-8 glow-effect">
            <div className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              YourDiscord#0000
            </div>
            <p className="text-gray-400 text-lg mb-8">
              Payment processed after quote approval • No upfront fees • Response within 24 hours
            </p>
            
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-xl px-16 py-8 font-black glow-effect-strong animate-glow-pulse transition-all duration-300 hover:scale-105"
              onClick={scrollToContact}
            >
              Message Me on Discord
              <ExternalLink className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <div className="font-black text-2xl mb-2">DRAUNTS SERVICES™</div>
              <p className="text-gray-400">Professional Technology Solutions</p>
            </div>
            
            <div className="flex gap-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors font-medium">Discord</a>
              <a href="#" className="hover:text-white transition-colors font-medium">Terms</a>
              <a href="#" className="hover:text-white transition-colors font-medium">Privacy</a>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            © 2025 Draunts Services™. All rights reserved.
          </div>
        </div>
      </footer>

      <ServiceModal 
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceName={selectedService.name}
        serviceIcon={selectedService.icon}
        serviceDescription={selectedService.description}
      />
    </div>
  );
};

export default Index;
