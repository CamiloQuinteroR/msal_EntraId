import React from "react";
import { useMsal } from "@azure/msal-react";
import "./App.css";

function App() {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginPopup().catch((error) => console.log(error));
  };

  const handleLogout = () => {
    instance.logoutPopup().catch((error) => console.log(error));
  };

  return (
    <div className="app-container">
      <div className="login-card">
        <div className="card-header">
          <div className="logo-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" className="microsoft-logo">
              <path fill="#f35325" d="M1 1h10v10H1z"/>
              <path fill="#81bc06" d="M12 1h10v10H12z"/>
              <path fill="#05a6f0" d="M1 12h10v10H1z"/>
              <path fill="#ffba08" d="M12 12h10v10H12z"/>
            </svg>
            <h1>Iniciar sesión</h1>
          </div>
          <p>Usa tu cuenta de Microsoft para acceder</p>
        </div>
        
        <div className="card-body">
          {accounts.length > 0 ? (
            <div className="welcome-section">
              <div className="user-avatar">
                {accounts[0].username.charAt(0).toUpperCase()}
              </div>
              <h2>¡Bienvenido!</h2>
              <p className="user-email">{accounts[0].username}</p>
              <button 
                className="logout-btn"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <div className="login-section">
              <button 
                className="login-btn"
                onClick={handleLogin}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" className="microsoft-logo-btn">
                  <path fill="#f35325" d="M1 1h10v10H1z"/>
                  <path fill="#81bc06" d="M12 1h10v10H12z"/>
                  <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                  <path fill="#ffba08" d="M12 12h10v10H12z"/>
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