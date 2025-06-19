
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import ExpertisePage from "./pages/Expertise";
import IndustriesPage from "./pages/Industries";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
  console.error("Application error:", error);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-4">Please try refreshing the page</p>
        <button 
          onClick={resetErrorBoundary}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

const App = () => {
  console.log("App component rendering...");
  console.log("Environment:", import.meta.env.MODE);
  console.log("Base URL:", import.meta.env.BASE_URL);
  console.log("Production:", import.meta.env.PROD);
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={(error) => console.error("Error boundary caught:", error)}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
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
    </ErrorBoundary>
  );
};

export default App;
