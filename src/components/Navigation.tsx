import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProcess = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-all duration-300"
          >
            <img 
              src={logo} 
              alt="Draunts Services" 
              className="w-12 h-12 object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
            />
            <span className="font-bold text-xl hidden sm:inline tracking-tight">DRAUNTS SERVICES™</span>
          </button>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm">
              <button 
                onClick={scrollToServices}
                className="text-text-secondary hover:text-white transition-colors relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </button>
              <span className="text-white/20">•</span>
              <button 
                onClick={scrollToProcess}
                className="text-text-secondary hover:text-white transition-colors relative group"
              >
                Process
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </button>
              <span className="text-white/20">•</span>
              <button 
                onClick={scrollToContact}
                className="text-text-secondary hover:text-white transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </button>
            </div>
            
            <Button
              onClick={scrollToContact}
              className="bg-white text-black hover:bg-white/90 font-semibold transition-all duration-300 hover:scale-105"
              style={{ width: "140px", height: "42px" }}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
