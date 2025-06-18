
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import ExpertisePage from "./pages/Expertise";
import IndustriesPage from "./pages/Industries";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log("App component rendering...");
  console.log("Environment:", import.meta.env.MODE);
  console.log("Base URL:", import.meta.env.BASE_URL);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.PROD ? "/momentum-edge-blueprint" : ""}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
