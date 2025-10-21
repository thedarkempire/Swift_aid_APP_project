import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-rose-50 dark:bg-rose-950/20 py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Swift-Aid
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Quick access to emergency medical information and assistance when you need it most
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => navigate('/emergency-contacts')}
            className="bg-primary hover:bg-primary/90"
          >
            Emergency Contacts
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate('/hospitals')}
          >
            Find Hospitals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
