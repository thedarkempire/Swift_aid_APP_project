import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, User, Stethoscope } from "lucide-react";

const emergencyContacts = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    relationship: "Primary Care Physician",
    phone: "+1 (555) 123-4567",
    type: "doctor",
    available: "24/7"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    relationship: "Cardiologist",
    phone: "+1 (555) 234-5678",
    type: "doctor",
    available: "Mon-Fri 9AM-5PM"
  },
  {
    id: 3,
    name: "John Smith",
    relationship: "Emergency Contact - Spouse",
    phone: "+1 (555) 345-6789",
    type: "family",
    available: "24/7"
  },
  {
    id: 4,
    name: "Emily Davis",
    relationship: "Emergency Contact - Sister",
    phone: "+1 (555) 456-7890",
    type: "family",
    available: "24/7"
  },
  {
    id: 5,
    name: "Dr. Robert Martinez",
    relationship: "Allergist",
    phone: "+1 (555) 567-8901",
    type: "doctor",
    available: "Mon-Thu 8AM-6PM"
  }
];

const EmergencyContacts = () => {
  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Emergency Contacts</h1>
          <p className="text-muted-foreground">Quick access to your medical team and loved ones</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {emergencyContacts.map((contact) => (
            <Card key={contact.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-full ${
                      contact.type === 'doctor' ? 'bg-primary/10' : 'bg-accent/10'
                    }`}>
                      {contact.type === 'doctor' ? (
                        <Stethoscope className="h-6 w-6 text-primary" />
                      ) : (
                        <User className="h-6 w-6 text-accent" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{contact.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{contact.relationship}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone Number</p>
                    <p className="text-lg font-semibold">{contact.phone}</p>
                  </div>
                  <Button
                    onClick={() => handleCall(contact.phone)}
                    size="lg"
                    className="gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </Button>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Available:</span> {contact.available}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
