import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Phone, Hospital, FileText, User, LayoutDashboard, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Shield,
    title: "First Aid",
    subtitle: "Quick access to first aid procedures for common emergencies",
    description: "Learn how to respond to medical emergencies with step-by-step guides for common situations.",
    link: "View First Aid Guides",
    path: "/first-aid"
  },
  {
    icon: Phone,
    title: "Emergency Contacts",
    subtitle: "Store important emergency contact information",
    description: "Keep all your emergency contacts in one place for quick access during critical situations.",
    link: "Manage Contacts",
    path: "/emergency-contacts"
  },
  {
    icon: Hospital,
    title: "Nearby Hospitals",
    subtitle: "Find hospitals and medical facilities near you",
    description: "Quickly locate the nearest hospitals and medical facilities with contact information.",
    link: "Find Hospitals",
    path: "/hospitals"
  },
  {
    icon: FileText,
    title: "Medical History",
    subtitle: "Store your medical history for quick reference",
    description: "Keep track of your medical conditions, allergies, and medications for healthcare providers.",
    link: "Update Medical History",
    path: "/medical-history"
  },
  {
    icon: User,
    title: "Personal Information",
    subtitle: "Manage your personal and emergency information",
    description: "Store your personal details and emergency instructions for first responders.",
    link: "Update Personal Info",
    path: "/personal-info"
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    subtitle: "View all your medical information at a glance",
    description: "Access a comprehensive overview of your medical information and emergency contacts.",
    link: "Go to Dashboard",
    path: "/dashboard"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Medical Assistance at Your Fingertips</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border"
            >
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-foreground/70">
                  {feature.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                <Link 
                  to={feature.path}
                  className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {feature.link} <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
