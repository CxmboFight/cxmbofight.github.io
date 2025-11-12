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
}

const ServiceModal = ({ open, onOpenChange, serviceName, serviceIcon }: ServiceModalProps) => {
  const handleDiscordContact = () => {
    window.open("https://discord.com", "_blank");
  };

  const steps = [
    { text: "DM me on Discord", detail: "Draunts" },
    { text: "Discuss requirements", detail: "Tell me exactly what you need" },
    { text: "Receive custom quote", detail: "Fair pricing for your project" },
    { text: "Approve & pay via CashApp", detail: "Secure payment processing" },
    { text: "Send screenshot", detail: "Confirm payment on Discord" },
    { text: "Work begins!", detail: "Project starts immediately" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-black border-2 border-white/20 shadow-2xl">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl">{serviceIcon}</span>
            <div>
              <DialogTitle className="text-3xl font-bold text-white mb-2">
                Ready to Get Started?
              </DialogTitle>
              <DialogDescription className="text-gray-400 text-base">
                {serviceName}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-4 my-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 pt-0.5">
                <h4 className="font-semibold text-white text-base mb-1">
                  Step {index + 1}: {step.text}
                </h4>
                <p className="text-sm text-gray-400">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Button 
            onClick={handleDiscordContact} 
            className="w-full bg-white text-black hover:bg-white/90 font-bold py-6 text-lg glow-effect-hover transition-all duration-300 hover:scale-105"
          >
            Contact on Discord
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
          <button
            onClick={() => onOpenChange(false)}
            className="w-full text-gray-400 hover:text-white transition-colors text-sm py-2"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
