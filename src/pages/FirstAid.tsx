import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertCircle, Heart, Droplets, Flame, Bone, Brain } from "lucide-react";

const firstAidGuides = [
  {
    icon: Heart,
    title: "CPR (Cardiopulmonary Resuscitation)",
    category: "Critical",
    steps: [
      "Check for responsiveness and call emergency services",
      "Place person on firm, flat surface",
      "Position hands in center of chest",
      "Push hard and fast - at least 2 inches deep",
      "Give 30 chest compressions at 100-120 per minute",
      "Give 2 rescue breaths",
      "Continue cycles until help arrives"
    ]
  },
  {
    icon: Droplets,
    title: "Severe Bleeding",
    category: "Critical",
    steps: [
      "Call emergency services immediately",
      "Apply direct pressure to wound with clean cloth",
      "Keep pressure firm and constant",
      "Add more cloth if bleeding soaks through",
      "Do not remove the original cloth",
      "Elevate injured area above heart if possible",
      "Keep person warm and calm"
    ]
  },
  {
    icon: Flame,
    title: "Burns",
    category: "Common",
    steps: [
      "Remove person from heat source",
      "Cool the burn with cool (not cold) running water for 10-20 minutes",
      "Remove jewelry and tight clothing before swelling",
      "Do not apply ice, butter, or ointments",
      "Cover with sterile, non-stick bandage",
      "Seek medical help for severe burns",
      "Monitor for shock"
    ]
  },
  {
    icon: Brain,
    title: "Choking",
    category: "Critical",
    steps: [
      "Encourage coughing if person can breathe",
      "If unable to breathe, call emergency services",
      "Perform 5 back blows between shoulder blades",
      "Perform 5 abdominal thrusts (Heimlich maneuver)",
      "Alternate between back blows and abdominal thrusts",
      "Continue until object is dislodged",
      "If unconscious, begin CPR"
    ]
  },
  {
    icon: Bone,
    title: "Fractures/Broken Bones",
    category: "Serious",
    steps: [
      "Call emergency services for severe fractures",
      "Do not move the person unless necessary",
      "Immobilize the injured area",
      "Apply ice packs to reduce swelling",
      "Treat for shock if necessary",
      "Do not try to realign the bone",
      "Monitor vital signs until help arrives"
    ]
  },
  {
    icon: AlertCircle,
    title: "Shock",
    category: "Serious",
    steps: [
      "Call emergency services immediately",
      "Lay person down with legs elevated 12 inches",
      "Do not elevate head",
      "Keep person warm with blanket",
      "Do not give anything to eat or drink",
      "Turn head to side if vomiting",
      "Monitor breathing and pulse"
    ]
  }
];

const FirstAid = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">First Aid Procedures</h1>
          <p className="text-muted-foreground">Step-by-step guides for common medical emergencies</p>
        </div>

        <Card className="mb-6 border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              Important Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              These guides are for informational purposes only. In case of a medical emergency, 
              always call emergency services immediately. These instructions do not replace 
              professional medical training.
            </p>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="space-y-4">
          {firstAidGuides.map((guide, index) => (
            <Card key={index}>
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <guide.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{guide.title}</h3>
                      <span className={`text-sm ${
                        guide.category === 'Critical' ? 'text-destructive' : 
                        guide.category === 'Serious' ? 'text-orange-600' : 
                        'text-muted-foreground'
                      }`}>
                        {guide.category}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ol className="list-decimal list-inside space-y-2 mt-4">
                    {guide.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="text-foreground/90">
                        {step}
                      </li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Card>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FirstAid;
