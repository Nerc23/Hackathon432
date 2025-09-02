import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Premium from "./pages/Premium";
import KnowledgeTest from "./pages/KnowledgeTest";
import Create from "./pages/Create";
import Settings from "./pages/Settings";
import Study from "./pages/Study";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/test" element={<KnowledgeTest />} />
          <Route path="/create" element={<Create />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/study" element={<Study />} />
          <Route path="/subjects/:subjectId/test" element={<KnowledgeTest />} />
          <Route path="/subjects/:subjectId/study" element={<Study />} />
          <Route path="/subjects/:subjectId/edit" element={<Settings />} />
          <Route path="/subjects/create" element={<Create />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

