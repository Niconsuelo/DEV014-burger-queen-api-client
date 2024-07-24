const API_URL = "http://localhost:8080"; 

//realiza solicitud a la API para autenticar el usuario
export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Error en la autenticación");
  }

  const data = await response.json();
  return data.token; // Asegúrate de que el token es lo que devuelve tu API
};

