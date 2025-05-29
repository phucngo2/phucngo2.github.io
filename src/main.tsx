import { HeroUIProvider } from "@heroui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <main className="dark text-foreground bg-background">
        <App />
      </main>
    </HeroUIProvider>
  </StrictMode>
);
