import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CareHome from "./pages/CareHome";
import PersonalizedCare from "./pages/PersonalizedCare";
import CarePay from "./pages/CarePay";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partner from "./pages/Partner";
import Careers from "./pages/Careers";
import GlobalPresence from "./pages/GlobalPresence";
import NotFound from "./pages/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const queryClient = new QueryClient();


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    AOS.refresh();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/care-home" element={<CareHome />} />
            <Route path="/personalized" element={<PersonalizedCare />} />
            <Route path="/care-pay" element={<CarePay />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/global-presence" element={<GlobalPresence />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
