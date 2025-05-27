export const validateName = (name) => {
  if (!name.trim()) return 'El nombre es obligatorio';
  if (name.length < 5) return 'Mínimo 5 caracteres';
  if (name.length > 30) return 'Máximo 30 caracteres';
  return '';
};

export const validateLastname = (lastname) => {
  if (!lastname.trim()) return 'Los apellidos son obligatorios';
  if (lastname.length < 5) return 'Mínimo 5 caracteres';
  if (lastname.length > 30) return 'Máximo 30 caracteres';
  return '';
};

export const validatePhone = (phone) => {
  if (!phone) return 'El teléfono es obligatorio';
  if (!/^\d+$/.test(phone)) return 'Solo se permiten números';
  if (phone.length < 7 || phone.length > 10) return 'Debe tener entre 7 y 10 dígitos';
  return '';
};

export const validateEmail = (email) => {
  if (!email) return 'El email es obligatorio';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Formato de email inválido';
  return '';
};

export const areFieldsFilled = (formData) => {
  return (
    formData.name.trim() !== '' &&
    formData.lastname.trim() !== '' &&
    formData.phoneNumber.trim() !== '' &&
    formData.email.trim() !== ''
  );
};

export const isFormValid = (errors, formData) => {
  return Object.values(errors).every(error => error === '') && areFieldsFilled(formData);
};