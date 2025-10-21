import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This platform transformed how we build web applications. The speed and quality are unmatched.",
    author: "Alex Thompson",
    company: "TechCorp Inc."
  },
  {
    quote: "Incredible developer experience and beautiful results. Our team productivity increased by 300%.",
    author: "Maria Garcia",
    company: "StartupXYZ"
  },
  {
    quote: "The best investment we made this year. Customer satisfaction went through the roof.",
    author: "James Wilson",
    company: "Enterprise Solutions"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What People Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of happy customers worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                <p className="text-lg mb-6 text-foreground/90">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
