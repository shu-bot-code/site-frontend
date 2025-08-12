import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
}

/**
 * @component SectionHeader
 * @description Componente para padronizar os cabeçalhos das seções.
 * Inclui um selo (badge), um título principal e uma descrição opcional.
 * @param {string} badge - Texto para o selo destacado.
 * @param {string} title - O título principal da seção (h2).
 * @param {string} [description] - Parágrafo descritivo opcional.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, title, description }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      <div className="inline-block px-3 py-1 text-sm font-semibold text-ax-primary bg-ax-primary/10 rounded-full mb-4">
        {badge}
      </div>
      {/* SEO: Usar <h2> para títulos de seção é uma boa prática de hierarquia de conteúdo. */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-spline text-ax-light mb-4">
        {title}
      </h2>
      {description && <p className="text-lg text-ax-sub max-w-2xl mx-auto">{description}</p>}
    </div>
  );
};