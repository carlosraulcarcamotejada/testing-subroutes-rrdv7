import { BrowserRouter as Router } from "react-router";
import { Navbar } from "./components/navbar";
import { AppRouter } from "./components/app-router";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
}

export { App };
