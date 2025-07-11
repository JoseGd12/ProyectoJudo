const API_URL = 'https://api.escuelajs.co/api/v1';

export const authenticateUser = async (credentials) => {
  const { email, password } = credentials;
  
  const response = await fetch(`${API_URL}/users`);
  
  if (!response.ok) {
    throw new Error('Error al conectar con el servidor');
  }
  
  const users = await response.json();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar
    };
  }
  
  return null;
};