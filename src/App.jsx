import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import "./App.css";

function App() {
  const { instance, accounts } = useMsal();
  const [user, setUser] = useState(null);

  // Función para obtener datos del usuario desde Microsoft Graph
  const getUserProfile = async (account) => {
    try {
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account,
      });

      const token = response.accessToken;

      // Llamada a Microsoft Graph
      const graphResponse = await fetch("https://graph.microsoft.com/v1.0/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await graphResponse.json();
      setUser(data);
    } catch (error) {
      console.error("Error al obtener datos de Graph:", error);
    }
  };

  // Ejecuta cuando haya un usuario autenticado
  useEffect(() => {
    if (accounts.length > 0) {
      getUserProfile(accounts[0]);
    }
  }, [accounts]);

  // Botones de login/logout
  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((error) => console.log(error));
  };

  const handleLogout = () => {
    instance.logoutPopup().catch((error) => console.log(error));
    setUser(null);
  };

  return (
    <div className="app-container">
      <div className="login-card">
        <div className="card-header">
          <div className="logo-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" className="microsoft-logo">
              <path fill="#f35325" d="M1 1h10v10H1z" />
              <path fill="#81bc06" d="M12 1h10v10H12z" />
              <path fill="#05a6f0" d="M1 12h10v10H1z" />
              <path fill="#ffba08" d="M12 12h10v10H12z" />
            </svg>
            <h1>Iniciar sesión</h1>
          </div>
          <p>Usa tu cuenta de Microsoft para acceder</p>
        </div>

        <div className="card-body">
          {accounts.length > 0 ? (
            <div className="welcome-section">
              <div className="user-avatar">
                {user ? user.displayName.charAt(0).toUpperCase() : "?"}
              </div>
              <h2>¡Hola {user ? user.displayName : "Usuario"}!</h2>
              <p className="user-email">{user ? user.mail || user.userPrincipalName : accounts[0].username}</p>
              <button className="logout-btn" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </div>
          ) : (
            <div className="login-section">
              <button className="login-btn" onClick={handleLogin}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" className="microsoft-logo-btn">
                  <path fill="#f35325" d="M1 1h10v10H1z" />
                  <path fill="#81bc06" d="M12 1h10v10H12z" />
                  <path fill="#05a6f0" d="M1 12h10v10H1z" />
                  <path fill="#ffba08" d="M12 12h10v10H12z" />
                </svg>
                Continuar con Microsoft
              </button>
            </div>
          )}
        </div>

        <div className="card-footer">
          <p>Protegido por Microsoft Identity Platform</p>
        </div>
      </div>
    </div>
  );
}

export default App;
