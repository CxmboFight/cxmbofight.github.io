import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}

const ServiceCard = ({ icon, title, description, onClick }: ServiceCardProps) => {
  return (
    <div className="group relative card-premium border-glow rounded-xl p-8 transition-all duration-[350ms] hover:scale-[1.02] hover:-translate-y-3 noise-texture h-full flex flex-col">
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] pointer-events-none">
        <div className="absolute inset-0 rounded-xl blur-2xl bg-white/10" />
      </div>
      
      <div className="relative z-10 flex flex-col flex-1">
        <div className="text-5xl mb-6 filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontWeight: 700 }}>
          {title}
        </h3>
        <p className="text-text-secondary mb-8 leading-relaxed text-[15px] flex-1">
          {description}
        </p>
        <Button
          onClick={onClick}
          variant="outline"
          className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-[350ms] py-6 text-base"
        >
          Request Quote
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
