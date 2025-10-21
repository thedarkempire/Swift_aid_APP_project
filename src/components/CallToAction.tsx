import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-rose-50 dark:bg-rose-950/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Be Prepared for Medical Emergencies
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Set up your Swift-Aid profile today to ensure you have all the necessary information at hand when it matters most.
        </p>
        <Button 
          size="lg" 
          onClick={() => navigate('/dashboard')}
          className="bg-primary hover:bg-primary/90"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
