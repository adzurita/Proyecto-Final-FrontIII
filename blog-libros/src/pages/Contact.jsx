import React, { useState } from 'react';
import NavigationButtons from '../components/NavigationButtons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;

    if (name.length <= 5 || !email.includes('@')) {
      setMessage('Por favor verifica tu información nuevamente.');
    } else {
      setMessage(`Gracias ${name}, te contactaremos pronto vía correo.`);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-content">
      <NavigationButtons /> {/* Botones de navegación */}
      <div className="contact">
        <h1>Contáctanos</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Contact;
