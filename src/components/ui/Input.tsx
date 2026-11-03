
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    error?: string;
}

function Input({
    label,
    helperText,
    error,
    className = '',
    id,
    ...props
}: InputProps) {
    const inputId = id ?? props.name;

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm text-gray-300 mb-2"
                >
                    {label}
                </label>
            )}

            <input
                id={inputId}
                className={`w-full px-4 py-3 rounded-xl bg-[#111827] border ${
                    error
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white/10 focus:border-blue-500'
                } focus:outline-none text-sm text-white placeholder:text-gray-600 transition-all ${className}`}
                aria-invalid={Boolean(error)}
                aria-describedby={
                    error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
                }
                {...props}
            />

            {error ? (
                <p
                    id={`${inputId}-error`}
                    className="text-xs text-red-400 mt-2"
                    role="alert"
                >
                    {error}
                </p>
            ) : helperText ? (
                <p
                    id={`${inputId}-helper`}
                    className="text-xs text-gray-500 mt-2"
                >
                    {helperText}
                </p>
            ) : null}
        </div>
    );
}

export default Input;
