/*
 * NUVCORE App.tsx
 * Design: "Precision Dark" — Dark SaaS Modernism
 * Theme: Dark (Tech Black #0F0F12 background)
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToastContainer } from "./components/Toast";
import { useNotification } from "./contexts/NotificationContext";
import { useWebSocket } from "./hooks/useWebSocket";
import Home from "./pages/Home";
import NotificationHistory from "./pages/NotificationHistory";
import AdminPanel from "./pages/AdminPanel";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/notifications"} component={NotificationHistory} />
      <Route path={"/admin"} component={AdminPanel} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );

}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function AppContent() {
  const { toasts, removeToast } = useNotification();
  useWebSocket(); // Initialize WebSocket connection

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
          <ToastContainer toasts={toasts} onRemove={removeToast} />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

function App() {
  return <AppContent />;
}

export default App;
