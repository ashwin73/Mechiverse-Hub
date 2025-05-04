
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";
import UpdateResources from "./pages/UpdateResources";
import Resources from "./pages/Resources";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "@/components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/category/:categorySlug" element={<CategoryPage />} />
                  <Route path="/update-resources" element={<UpdateResources />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
