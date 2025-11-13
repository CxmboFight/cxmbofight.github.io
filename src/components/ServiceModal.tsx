import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check } from "lucide-react";

interface ServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceName: string;
  serviceIcon: string;
  serviceDescription: string;
}

const ServiceModal = ({ open, onOpenChange, serviceName, serviceIcon, serviceDescription }: ServiceModalProps) => {
  const handleDiscordContact = () => {
    window.open("https://discord.com", "_blank");
  };

  const steps = [
    { 
      text: "Contact on Discord", 
      detail: "Send me a DM at 'draunts' explaining your project needs, technical requirements, and timeline" 
    },
    { 
      text: "Receive Custom Quote", 
      detail: "I'll provide a detailed proposal with pricing, timeline, deliverables, and technology recommendations within 24 hours" 
    },
    { 
      text: "Review & Approve", 
      detail: "Take your time to review the proposal and ask any questions before proceeding" 
    },
    { 
      text: "Payment via CashApp", 
      detail: "Once approved, complete payment using CashApp: cash.app/$Sympxthetics101 (This is the ONLY payment method accepted)" 
    },
    { 
      text: "Confirm Payment", 
      detail: "Send your CashApp payment screenshot to me on Discord for immediate verification" 
    },
    { 
      text: "Development Begins", 
      detail: "Your project enters the development queue and work starts within 24 hours of payment confirmation" 
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[680px] bg-[#050505] border-2 border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.2)] rounded-2xl backdrop-blur-xl">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{serviceIcon}</span>
            <div>
              <DialogTitle className="text-4xl font-bold text-white mb-2" style={{ fontWeight: 700 }}>
                Ready to Get Started?
              </DialogTitle>
              <DialogDescription className="text-text-secondary text-base">
                {serviceName}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="mb-6">
          <p className="text-base text-text-secondary leading-relaxed">
            Here's how to begin your project with Draunts Services™
          </p>
        </div>
        
        <div className="space-y-5 my-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 pt-0.5">
                <h4 className="font-semibold text-white text-base mb-1" style={{ fontWeight: 600 }}>
                  {index + 1}. {step.text}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Button 
            onClick={handleDiscordContact} 
            className="w-full bg-white text-black hover:bg-white/90 font-bold py-7 text-lg glow-effect-hover transition-all duration-[350ms] hover:scale-[1.02]"
            style={{ height: "56px", width: "200px", margin: "0 auto", display: "block" }}
          >
            Contact Me on Discord
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
          <button
            onClick={() => onOpenChange(false)}
            className="w-full text-text-tertiary hover:text-white transition-colors text-sm py-2"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
