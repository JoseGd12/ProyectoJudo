import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { 
  validateName, 
  validateLastname, 
  validatePhone, 
  validateEmail, 
  isFormValid 
} from '../data/validations';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    phoneNumber: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    lastname: '',
    phoneNumber: '',
    email: ''
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(isFormValid(errors, formData));
  }, [errors, formData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    switch (id) {
      case 'name':
        setErrors(prev => ({ ...prev, name: validateName(value) }));
        break;
      case 'lastname':
        setErrors(prev => ({ ...prev, lastname: validateLastname(value) }));
        break;
      case 'phoneNumber':
        setErrors(prev => ({ ...prev, phoneNumber: validatePhone(value) }));
        break;
      case 'email':
        setErrors(prev => ({ ...prev, email: validateEmail(value) }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      Swal.fire({
        title: '¡Inscripción exitosa!',
        text: 'Felicidades tus datos han sido guardados correctamente. Te mantendremos al tanto de los horarios de clase!',
        icon: 'success',
        confirmButtonColor: '#3b82f6',
        confirmButtonText: 'Aceptar'
      });
     
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      lastname: '',
      phoneNumber: '',
      email: ''
    });
    setErrors({
      name: '',
      lastname: '',
      phoneNumber: '',
      email: ''
    });
  };

  return (
    <section className="form-section">
        
      <h3 className="h3"><b>¿QUIERES APRENDER? </b> <br/> <b>INSCRIBETE AQUI</b> </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input 
            id="name" 
            type="text" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Ejemplo: Jose David" 
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div>
          <label htmlFor="lastname">Apellidos</label>
          <input 
            id="lastname" 
            type="text" 
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Ejemplo: Gaviria" 
            className={errors.lastname ? 'error' : ''}
          />
          {errors.lastname && <span className="error-message">{errors.lastname}</span>}
        </div>
        
        <div>
          <label htmlFor="phoneNumber">Número de teléfono</label>
          <input 
            id="phoneNumber" 
            type="text" 
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Ejemplo: 3205136194" 
            className={errors.phoneNumber ? 'error' : ''}
          />
          {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
        </div>
        
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input 
            id="email" 
            type="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Ejemplo: josedavidgd71@gmail.com" 
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="button-group">
          <button 
            type="submit" 
            className={`submit-btn ${!isValid ? 'disabled' : ''}`}
            disabled={!isValid}
          >
            Inscribirme
          </button>
          <button 
            type="button" 
            className="clear-btn"
            onClick={handleClear}
          >
            Limpiar formulario
          </button>
        </div>
      </form>
    </section>
  );
}

export { Form };