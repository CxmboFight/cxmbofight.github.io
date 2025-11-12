import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceName: string;
}

const ServiceModal = ({ open, onOpenChange, serviceName }: ServiceModalProps) => {
  const handleDiscordContact = () => {
    // This will open Discord if installed, otherwise fallback to web
    window.open("https://discord.com", "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Ready to Get Started?</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Follow these simple steps to order your {serviceName}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 my-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold mb-1">DM me on Discord first</h4>
              <p className="text-sm text-muted-foreground">Discord: YourDiscord#0000</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold mb-1">Discuss your project requirements</h4>
              <p className="text-sm text-muted-foreground">Tell me what you need in detail</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold mb-1">I'll send you the price quote</h4>
              <p className="text-sm text-muted-foreground">Custom pricing for your project</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h4 className="font-semibold mb-1">Pay via CashApp</h4>
              <p className="text-sm text-muted-foreground">I'll provide the payment link</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold">
              5
            </div>
            <div>
              <h4 className="font-semibold mb-1">Send payment screenshot</h4>
              <p className="text-sm text-muted-foreground">DM me the confirmation on Discord</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold">
              6
            </div>
            <div>
              <h4 className="font-semibold mb-1">Project begins!</h4>
              <p className="text-sm text-muted-foreground">I'll get started on your order</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button 
            onClick={handleDiscordContact} 
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Contact on Discord
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            onClick={() => onOpenChange(false)} 
            variant="secondary"
            className="flex-1"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
