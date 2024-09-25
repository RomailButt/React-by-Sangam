import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const uqeryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={uqeryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
);
