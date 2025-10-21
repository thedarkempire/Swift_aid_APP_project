import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, MapPin, Calendar, AlertCircle } from "lucide-react";

const personalInfo = {
  fullName: "John Michael Smith",
  dateOfBirth: "January 15, 1985",
  age: "39 years old",
  gender: "Male",
  email: "john.smith@email.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main Street, Apt 4B",
  city: "Springfield",
  state: "IL",
  zipCode: "62701",
  emergencyNotes: "Keep medical alert bracelet on at all times due to severe allergies. Has diabetes, check blood sugar if unconscious.",
  insuranceProvider: "Blue Cross Blue Shield",
  policyNumber: "BCBS123456789",
  groupNumber: "GRP987654"
};

const PersonalInfo = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Personal Information</h1>
          <p className="text-muted-foreground">Your personal and insurance details</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                <CardTitle>Basic Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                <p className="text-lg font-semibold">{personalInfo.fullName}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Date of Birth</p>
                  <p className="font-medium">{personalInfo.dateOfBirth}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Age</p>
                  <p className="font-medium">{personalInfo.age}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Gender</p>
                <p className="font-medium">{personalInfo.gender}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Phone className="h-6 w-6 text-primary" />
                <CardTitle>Contact Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-medium">{personalInfo.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-medium">{personalInfo.phone}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                <CardTitle>Address</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium">{personalInfo.address}</p>
              <p className="font-medium">
                {personalInfo.city}, {personalInfo.state} {personalInfo.zipCode}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                <CardTitle>Insurance Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Provider</p>
                <p className="font-semibold">{personalInfo.insuranceProvider}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Policy Number</p>
                <p className="font-medium font-mono text-sm">{personalInfo.policyNumber}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Group Number</p>
                <p className="font-medium font-mono text-sm">{personalInfo.groupNumber}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-primary/30 bg-primary/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-primary" />
              <CardTitle>Emergency Notes for First Responders</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">{personalInfo.emergencyNotes}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonalInfo;
