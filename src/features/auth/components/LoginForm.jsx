import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { validateEmail, validatePassword, isLoginFormValid } from '../services/loginValidations';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  
  const [touched, setTouched] = useState({
    email: false,
    password: false
  });
  
  const { login, isLoading, error } = useAuth();

  useEffect(() => {
    if (touched.email) {
      setErrors(prev => ({
        ...prev,
        email: validateEmail(formData.email)
      }));
    }
    if (touched.password) {
      setErrors(prev => ({
        ...prev,
        password: validatePassword(formData.password)
      }));
    }
  }, [formData, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setTouched({
      email: true,
      password: true
    });
    
    const newErrors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password)
    };
    
    setErrors(newErrors);
    
    if (isLoginFormValid(newErrors, formData)) {
      await login(formData);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            placeholder="usuario@ejemplo.com"
            className={touched.email && errors.email ? 'input-error' : ''}
          />
          {touched.email && errors.email && (
            <div className="field-error">{errors.email}</div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            placeholder="Tu contraseña"
            className={touched.password && errors.password ? 'input-error' : ''}
          />
          {touched.password && errors.password && (
            <div className="field-error">{errors.password}</div>
          )}
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading || !isLoginFormValid(errors, formData)} 
          className="login-button"
        >
          {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
        
        <div className="login-info">
          <p>Para pruebas usar:</p>
          <p>Email: maria@mail.com</p>
          <p>Contraseña: 12345</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;