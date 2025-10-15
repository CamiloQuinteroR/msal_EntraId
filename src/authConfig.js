export const msalConfig = {
    auth: {
      clientId: "0b57c4bf-a8e8-4296-83f5-7d268aca5111", //  (client) ID
      authority: "https://login.microsoftonline.com/cb4c3445-d1c4-49be-8835-70ae5d72c777", //  Tenant ID
      redirectUri: "http://localhost:5173/", 
    },
  };
  
  export const loginRequest = {
    scopes: ["User.Read"], // Permiso básico para leer info del usuario
  };
  