import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import FirstAid from "./pages/FirstAid";
import EmergencyContacts from "./pages/EmergencyContacts";
import Hospitals from "./pages/Hospitals";
import MedicalHistory from "./pages/MedicalHistory";
import PersonalInfo from "./pages/PersonalInfo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/first-aid" element={<FirstAid />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/medical-history" element={<MedicalHistory />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
