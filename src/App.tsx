import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GetQuote from "./pages/GetQuote";
import About from "./pages/About";
import TermLifeInsurance from "./pages/products/TermLifeInsurance";
import WholeLifeInsurance from "./pages/products/WholeLifeInsurance";
import UniversalLifeInsurance from "./pages/products/UniversalLifeInsurance";
import FinalExpenseInsurance from "./pages/products/FinalExpenseInsurance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quote" element={<GetQuote />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/term-life" element={<TermLifeInsurance />} />
          <Route path="/products/whole-life" element={<WholeLifeInsurance />} />
          <Route path="/products/universal-life" element={<UniversalLifeInsurance />} />
          <Route path="/products/final-expense" element={<FinalExpenseInsurance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
