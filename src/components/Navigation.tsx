import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "First Aid", path: "/first-aid" },
    { label: "Emergency Contacts", path: "/emergency-contacts" },
    { label: "Hospitals", path: "/hospitals" },
    { label: "Medical History", path: "/medical-history" },
    { label: "Personal Info", path: "/personal-info" }
  ];

  const handleEmergency = () => {
    navigate("/hospitals");
  };

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Swift-Aid</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              size="sm" 
              onClick={handleEmergency}
              className="bg-primary hover:bg-primary/90"
            >
              Emergency
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button 
              size="sm" 
              onClick={() => {
                handleEmergency();
                setIsOpen(false);
              }}
              className="w-full bg-primary hover:bg-primary/90 mt-2"
            >
              Emergency
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
