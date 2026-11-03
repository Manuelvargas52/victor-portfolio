
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../Input';

describe('Input', () => {
    it('debe mostrar la etiqueta', () => {
        render(<Input id="email" label="Correo electrónico" />);

        expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument();
    });

    it('debe permitir escribir texto', async () => {
        const user = userEvent.setup();

        render(<Input id="name" label="Nombre" />);

        const input = screen.getByLabelText('Nombre');

        await user.type(input, 'Manuel');

        expect(input).toHaveValue('Manuel');
    });

    it('debe mostrar un mensaje de ayuda', () => {
        render(
            <Input
                id="name"
                label="Nombre"
                helperText="Ingresa tu nombre"
            />
        );

        expect(screen.getByText('Ingresa tu nombre')).toBeInTheDocument();
    });

    it('debe mostrar un mensaje de error', () => {
        render(
            <Input
                id="email"
                label="Correo"
                error="El correo es obligatorio"
            />
        );

        expect(screen.getByRole('alert')).toHaveTextContent(
            'El correo es obligatorio'
        );

        expect(screen.getByLabelText('Correo')).toHaveAttribute(
            'aria-invalid',
            'true'
        );
    });
    it('debe utilizar name como identificador cuando no se proporciona id', () => {
        render(
            <Input
                name="username"
                label="Usuario"
            />
        );

        expect(screen.getByLabelText('Usuario')).toHaveAttribute(
            'id',
            'username'
        );
    });
});
