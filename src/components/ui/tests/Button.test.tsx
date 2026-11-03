
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button', () => {
    it('debe renderizar su contenido', () => {
        render(<Button>Guardar</Button>);

        expect(screen.getByRole('button', { name: 'Guardar' })).toBeInTheDocument();
    });

    it('debe ejecutar el evento onClick', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(<Button onClick={handleClick}>Guardar</Button>);

        await user.click(screen.getByRole('button', { name: 'Guardar' }));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('debe estar deshabilitado cuando disabled es true', () => {
        render(<Button disabled>Guardar</Button>);

        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('debe aplicar la variante primary por defecto', () => {
        render(<Button>Guardar</Button>);

        expect(screen.getByRole('button')).toHaveClass('bg-blue-600');
    });
});
