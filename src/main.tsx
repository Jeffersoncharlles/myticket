import { setDefaultOptions } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
// import { ThemeProvider } from "./context/theme-provider";
setDefaultOptions({ locale: ptBR });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      <RouterProvider router={router} />
      {/* </ThemeProvider> */}
    </HelmetProvider>
  </StrictMode>,
);
