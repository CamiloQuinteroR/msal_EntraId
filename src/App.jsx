import React from "react";
import { useMsal } from "@azure/msal-react";

function App() {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginPopup().catch((error) => console.log(error));
  };

  const handleLogout = () => {
    instance.logoutPopup().catch((error) => console.log(error));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>MSAL React Login Demo</h1>
      {accounts.length > 0 ? (
        <>
          <h2>Bienvenido, {accounts[0].username}</h2>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión con Microsoft</button>
      )}
    </div>
  );
}

export default App;
