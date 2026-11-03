
import type { HTMLAttributes } from 'react';

type BadgeVariant = 'success' | 'warning' | 'error' | 'info';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
    success: 'bg-green-500/10 border-green-500/20 text-green-400',
    warning: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    error: 'bg-red-500/10 border-red-500/20 text-red-400',
    info: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
};

function Badge({
    variant = 'info',
    className = '',
    children,
    ...props
}: BadgeProps) {
    return (
        <span
            className={`inline-flex items-center px-3 py-1.5 rounded-lg border text-xs font-medium ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}

export default Badge;
