import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Pill, Syringe, FileText, Heart } from "lucide-react";

const medicalData = {
  allergies: [
    { name: "Penicillin", severity: "Severe", reaction: "Anaphylaxis" },
    { name: "Peanuts", severity: "Moderate", reaction: "Hives, difficulty breathing" },
    { name: "Latex", severity: "Mild", reaction: "Skin irritation" }
  ],
  medications: [
    { name: "Lisinopril 10mg", purpose: "Blood pressure control", frequency: "Once daily", prescribedBy: "Dr. Sarah Johnson" },
    { name: "Metformin 500mg", purpose: "Diabetes management", frequency: "Twice daily", prescribedBy: "Dr. Michael Chen" },
    { name: "Atorvastatin 20mg", purpose: "Cholesterol management", frequency: "Once daily at bedtime", prescribedBy: "Dr. Sarah Johnson" }
  ],
  conditions: [
    { name: "Type 2 Diabetes", diagnosedDate: "March 2020", status: "Controlled" },
    { name: "Hypertension", diagnosedDate: "January 2019", status: "Controlled" },
    { name: "High Cholesterol", diagnosedDate: "June 2021", status: "Controlled" }
  ],
  vaccinations: [
    { name: "COVID-19 (Pfizer)", date: "January 2024", nextDue: "January 2025" },
    { name: "Influenza", date: "October 2024", nextDue: "October 2025" },
    { name: "Tetanus", date: "May 2022", nextDue: "May 2032" }
  ],
  bloodType: "A+",
  lastCheckup: "September 2024"
};

const MedicalHistory = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'severe':
        return 'bg-destructive text-destructive-foreground';
      case 'moderate':
        return 'bg-orange-500 text-white';
      case 'mild':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Medical History</h1>
          <p className="text-muted-foreground">Complete overview of your health information</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <CardTitle>Blood Type</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">{medicalData.bloodType}</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>Last Checkup</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{medicalData.lastCheckup}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6 border-destructive/30 bg-destructive/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-destructive" />
              <CardTitle className="text-destructive">Allergies</CardTitle>
            </div>
            <CardDescription>Critical information for emergency situations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {medicalData.allergies.map((allergy, index) => (
                <div key={index} className="p-4 bg-background rounded-lg border">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{allergy.name}</h3>
                    <Badge className={getSeverityColor(allergy.severity)}>
                      {allergy.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Reaction:</span> {allergy.reaction}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Pill className="h-6 w-6 text-primary" />
              <CardTitle>Current Medications</CardTitle>
            </div>
            <CardDescription>Prescribed medications and supplements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {medicalData.medications.map((medication, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">{medication.name}</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Purpose:</span> {medication.purpose}</p>
                    <p><span className="font-medium">Frequency:</span> {medication.frequency}</p>
                    <p><span className="font-medium">Prescribed by:</span> {medication.prescribedBy}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                <CardTitle>Medical Conditions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {medicalData.conditions.map((condition, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold">{condition.name}</h4>
                      <Badge variant="outline">{condition.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Diagnosed: {condition.diagnosedDate}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Syringe className="h-6 w-6 text-primary" />
                <CardTitle>Vaccinations</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {medicalData.vaccinations.map((vaccination, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <h4 className="font-semibold mb-1">{vaccination.name}</h4>
                    <div className="text-sm text-muted-foreground space-y-0.5">
                      <p>Last dose: {vaccination.date}</p>
                      <p>Next due: {vaccination.nextDue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
