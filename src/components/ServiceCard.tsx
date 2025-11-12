import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}

const ServiceCard = ({ icon, title, description, onClick }: ServiceCardProps) => {
  return (
    <div className="group relative bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-accent hover:bg-surface-elevated glow-effect-hover">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      <Button 
        onClick={onClick}
        variant="secondary"
        className="w-full group-hover:bg-accent transition-colors duration-300"
      >
        Get This Service
      </Button>
    </div>
  );
};

export default ServiceCard;
