export const validateEmail = (email) => {
  if (!email) return 'El email es obligatorio';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Formato de email inválido';
  return '';
};

export const validatePassword = (password) => {
  if (!password) return 'La contraseña es obligatoria';
  if (password.length < 5) return 'Mínimo 5 caracteres';
  if (password.length > 30) return 'Máximo 30 caracteres';
  return '';
};

export const isLoginFormValid = (errors, formData) => {
  return (
    errors.email === '' && 
    errors.password === '' && 
    formData.email.trim() !== '' && 
    formData.password.trim() !== ''
  );
};