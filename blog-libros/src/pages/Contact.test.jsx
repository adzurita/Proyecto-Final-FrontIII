import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact'; // Asegúrate de ajustar la ruta al componente
import '@testing-library/jest-dom';

describe('Formulario de contacto', () => {
  it('renderiza el formulario correctamente', () => {
    render(<Contact />);

    // Verifica que los campos de entrada existan
    expect(screen.getByPlaceholderText(/nombre completo/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('muestra un mensaje de error si se envían datos inválidos', () => {
    render(<Contact />);

    // Obtén el botón y haz clic sin completar el formulario
    const button = screen.getByRole('button', { name: /enviar/i });
    fireEvent.click(button);

    // Verifica que se muestra el mensaje de error
    expect(screen.getByText(/por favor verifica tu información nuevamente/i)).toBeInTheDocument();
  });

  it('muestra un mensaje de éxito si se envían datos válidos', () => {
    render(<Contact />);

    // Completa los campos del formulario
    fireEvent.change(screen.getByPlaceholderText(/nombre completo/i), {
      target: { value: 'Juan Pérez' },
    });
    fireEvent.change(screen.getByPlaceholderText(/correo electrónico/i), {
      target: { value: 'juan.perez@example.com' },
    });

    // Haz clic en el botón de enviar
    const button = screen.getByRole('button', { name: /enviar/i });
    fireEvent.click(button);

    // Verifica que se muestra el mensaje de éxito
    expect(screen.getByText(/gracias juan pérez, te contactaremos pronto vía correo/i)).toBeInTheDocument();
  });
});
