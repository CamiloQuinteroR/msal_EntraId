export const msalConfig = {
    auth: {
      clientId: "b202ea33-7e7d-4248-a9d0-5db1290d7aa0", // <-- tu Application (client) ID
      authority: "https://login.microsoftonline.com/cb4c3445-d1c4-49be-8835-70ae5d72c777", // <-- tu Tenant ID
      redirectUri: "http://localhost:5173/", // debe coincidir con tu URI registrada
    },
  };
  
  export const loginRequest = {
    scopes: ["User.Read"], // Permiso básico para leer info del usuario
  };
  