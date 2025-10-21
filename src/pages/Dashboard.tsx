import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Hospital, FileText, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Quick access to all your medical information</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Emergency Status</CardTitle>
                <AlertCircle className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <Link to="/hospitals">
                <Button className="w-full" size="lg">
                  Find Nearest Hospital
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Emergency Contacts</CardTitle>
                <Phone className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">3 contacts saved</p>
              <Link to="/emergency-contacts">
                <Button variant="outline" className="w-full">
                  View Contacts
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Medical History</CardTitle>
                <FileText className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Last updated today</p>
              <Link to="/medical-history">
                <Button variant="outline" className="w-full">
                  View History
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Quick First Aid
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Access emergency first aid procedures instantly
            </p>
            <Link to="/first-aid">
              <Button variant="outline">
                View First Aid Guides
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
