import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}

const ServiceCard = ({ icon, title, description, onClick }: ServiceCardProps) => {
  return (
    <div className="group relative card-premium border-glow border-glow-hover rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-2 noise-texture">
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-xl blur-xl bg-white/10" />
      </div>
      
      <div className="relative z-10">
        <div className="text-6xl mb-6 filter drop-shadow-lg">{icon}</div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-400 mb-8 leading-relaxed text-base">{description}</p>
        <Button
          onClick={onClick}
          variant="outline"
          className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300 py-6 text-base"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
