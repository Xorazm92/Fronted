import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App.jsx";
import { theme } from "./config/theme.js";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
