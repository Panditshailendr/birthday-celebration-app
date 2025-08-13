import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BirthdayCelebration from "@/pages/birthday-celebration";
import NotFound from "@/pages/not-found";

function Router() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Handle GitHub Pages redirect
    const query = new URLSearchParams(window.location.search);
    const redirect = query.get('p');
    if (redirect) {
      // Remove leading slash and decode the path
      const cleanPath = redirect.startsWith('/') ? redirect.slice(1) : redirect;
      setLocation(`/${cleanPath}`);
    }
  }, [setLocation]);

  return (
    <Switch>
      <Route path="/" component={BirthdayCelebration} />
      <Route path="/:rest*" component={BirthdayCelebration} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
