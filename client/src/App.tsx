/* VID-GEN application shell: dark creator workspace, vivid four-color brand system, mobile-first routes. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Connections from "./pages/Connections";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={() => <Auth mode="login" />} />
      <Route path="/signup" component={() => <Auth mode="signup" />} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/connect" component={Connections} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
