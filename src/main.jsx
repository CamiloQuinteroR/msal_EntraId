import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PublicClientApplication } from "@azure/msal-browser"; // biblioteca oficial para manejar autenticación en el navegador
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig.js";

const msalInstance = new PublicClientApplication(msalConfig); //Creamos la instancia de MSAL

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);