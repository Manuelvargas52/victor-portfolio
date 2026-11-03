
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Badge from '../Badge';

describe('Badge', () => {
    it('debe mostrar su contenido', () => {
        render(<Badge>Success</Badge>);

        expect(screen.getByText('Success')).toBeInTheDocument();
    });

    it('debe aplicar la variante success', () => {
        render(<Badge variant="success">Success</Badge>);

        expect(screen.getByText('Success')).toHaveClass('text-green-400');
    });

    it('debe aplicar la variante warning', () => {
        render(<Badge variant="warning">Warning</Badge>);

        expect(screen.getByText('Warning')).toHaveClass('text-yellow-400');
    });

    it('debe aplicar la variante error', () => {
        render(<Badge variant="error">Error</Badge>);

        expect(screen.getByText('Error')).toHaveClass('text-red-400');
    });

    it('debe aplicar la variante info por defecto', () => {
        render(<Badge>Information</Badge>);

        expect(screen.getByText('Information')).toHaveClass('text-blue-400');
    });
});
