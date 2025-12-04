import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import ProgramPage from "./pages/program";
import ProductsSection from "./pages/products/product_page";
import Quiz from "./pages/kuis/quiz_identity";
import ResultPage from "./pages/kuis/score";
// import Team from "./pages/Team";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Keep fallback routes for direct navigation */}
          <Route path="/team" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/product" element={<ProductsSection />} />
          <Route path="/quiz/:page" element={<Quiz />} />
          <Route path="/result" element={<ResultPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
