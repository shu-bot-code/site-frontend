import React from 'react';

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  className?: string;
}

/**
 * @component Card
 * @description Componente de card versátil para exibir informações de forma estruturada.
 * Utilizado para serviços, cases de sucesso e posts do blog.
 * @param {React.ReactNode} [icon] - Ícone a ser exibido no topo do card.
 * @param {string} title - Título principal do card.
 * @param {string} [subtitle] - Subtítulo opcional, exibido acima do título.
 * @param {string} description - Texto descritivo do card.
 * @param {string} [className] - Classes CSS adicionais para customização.
 */
export const Card: React.FC<CardProps> = ({ icon, title, subtitle, description, className = '' }) => {
  return (
    <div className={`bg-ax-dark border border-ax-border rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-ax-primary/50 hover:-translate-y-1 ${className}`}>
      {icon && <div className="mb-4 text-ax-primary">{icon}</div>}
      {subtitle && <p className="text-sm font-semibold text-ax-primary mb-1">{subtitle}</p>}
      <h3 className="text-xl font-bold font-spline text-ax-light mb-3">{title}</h3>
      <p className="text-ax-sub leading-relaxed">{description}</p>
    </div>
  );
};