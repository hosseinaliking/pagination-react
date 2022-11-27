import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./reset.css";



//* React Query *//
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
