import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * @component Section
 * @description Componente reutilizável que envolve cada seção principal da página.
 * Aplica preenchimento (padding) padrão e uma animação de fade-in para uma entrada suave.
 * @param {string} id - O ID da seção, usado para navegação de âncora.
 * @param {React.ReactNode} children - O conteúdo a ser renderizado dentro da seção.
 * @param {string} [className] - Classes CSS adicionais para customização.
 */
export const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    // SEO: O uso de <section> com um `id` ajuda na semântica e na navegação da página.
    <section id={id} className={`w-full py-20 md:py-28 ${className}`}>
      {/* OPTIMIZATION: A animação é aplicada aqui para afetar todo o conteúdo da seção de uma vez. */}
      <div className="container mx-auto px-6 animate-fade-in-up" style={{ animationFillMode: 'forwards', opacity: 0 }}>
        {children}
      </div>
    </section>
  );
};