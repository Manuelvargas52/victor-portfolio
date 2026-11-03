
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
    primary:
        'bg-blue-600 hover:bg-blue-500 text-white border border-blue-600',
    secondary:
        'bg-white/10 hover:bg-white/15 text-gray-200 border border-white/10',
    outline:
        'bg-transparent hover:bg-white/5 text-gray-200 border border-white/20',
};

function Button({
    variant = 'primary',
    className = '',
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
