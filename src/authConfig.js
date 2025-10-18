export const msalConfig = {
    auth: {
      clientId: "0b57c4bf-a8e8-4296-83f5-7d268aca5111", //  identificador único de la aplicación
      authority: "https://login.microsoftonline.com/cb4c3445-d1c4-49be-8835-70ae5d72c777", //  en qué organización debe buscar al usuario para autenticarlo
      redirectUri: "http://localhost:5173/", //dirección donde volverá el usuario después del login exitoso
    },
  };
  
  // Solicitud de permisos
  export const loginRequest = {
    scopes: ["User.Read"], // Permiso básico para leer info del usuario
  };
  