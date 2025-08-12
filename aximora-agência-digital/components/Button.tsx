import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

const LoadingSpinner: React.FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

/**
 * @component Button
 * @description Botão reutilizável com suporte a variantes de estilo, estado de carregamento e desativado.
 * @param {React.ReactNode} children - O conteúdo do botão (texto, ícone, etc).
 * @param {'primary' | 'secondary'} [variant='primary'] - A variante de estilo do botão.
 * @param {boolean} [isLoading=false] - Se true, exibe um spinner e desativa o botão.
 * @param {boolean} [disabled] - Desativa o botão.
 * @param {string} [className] - Classes CSS adicionais para customização.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  disabled,
  className,
  ...props
}) => {
  const baseClasses = 'px-8 py-3 text-base font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ax-dark inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'text-ax-dark bg-ax-primary hover:bg-opacity-90 focus:ring-ax-primary',
    secondary: 'text-ax-light bg-ax-border hover:bg-ax-border/70 focus:ring-ax-accent',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${ (isLoading || disabled) ? disabledClasses : ''} ${className || ''}`}
      disabled={isLoading || disabled}
      {...props}
      // A11Y: O estado `disabled` é crucial para a acessibilidade.
    >
      {isLoading && <LoadingSpinner />}
      {children}
    </button>
  );
};