import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/hooks/use-theme";
import HomePage from "@/pages/home";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
// App.jsx
import { Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

// Your route declarations
function Routes() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <WouterRouter hook={useHashLocation}>
          <AnimatedBackground />
          <Routes />
          <Toaster />
        </WouterRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
