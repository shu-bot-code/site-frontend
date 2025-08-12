import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

/**
 * @component ResourcesSection
 * @description Uma seção de CTA para captura de leads, oferecendo um recurso valioso.
 */
export const ResourcesSection: React.FC = () => {
    
  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="resources" className="bg-ax-border/20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-spline text-ax-light mb-4">
          Desbloqueie Insights Exclusivos
        </h2>
        <p className="text-lg text-ax-sub mb-8">
          Obtenha uma vantagem competitiva com nosso Relatório de Tendências Digitais de 2025. Tenha acesso a análises aprofundadas e estratégias acionáveis entrando em contato com nossa equipe.
        </p>
        <Button 
          variant="primary" 
          onClick={(e) => handleNavClick(e, '#contact')}
          className="animate-subtle-pulse"
        >
          Receber o Relatório
        </Button>
      </div>
    </Section>
  );
};