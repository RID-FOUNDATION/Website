import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Social from "./pages/AreaOfWork/Social";
import Cultural from "./pages/AreaOfWork/Cultural";
import Educational from "./pages/AreaOfWork/Educational";
import Healthcare from "./pages/AreaOfWork/Healthcare";
import Agricultural from "./pages/AreaOfWork/Agricultural";
import Environment from "./pages/AreaOfWork/Environment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/area-of-work/social" element={<Social />} />
          <Route path="/area-of-work/cultural" element={<Cultural />} />
          <Route path="/area-of-work/educational" element={<Educational />} />
          <Route path="/area-of-work/healthcare" element={<Healthcare />} />
          <Route path="/area-of-work/agricultural" element={<Agricultural />} />
          <Route path="/area-of-work/environment" element={<Environment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
