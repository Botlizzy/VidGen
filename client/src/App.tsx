/* Midnight Studio routing: public landing page with focused auth routes and no unnecessary chrome. */
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

function App() {
  return <ErrorBoundary><Switch><Route path="/" component={Home} /><Route path="/login"><Auth mode="login" /></Route><Route path="/signup"><Auth mode="signup" /></Route><Route component={NotFound} /></Switch></ErrorBoundary>;
}

export default App;
