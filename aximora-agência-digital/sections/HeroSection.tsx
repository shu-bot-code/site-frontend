import React from 'react';
import { Button } from '../components/Button';
import { Section } from '../components/Section';

/**
 * @component HeroSection
 * @description A primeira seção da página, projetada para causar um forte impacto inicial.
 * Apresenta o slogan principal e os CTAs primários.
 */
export const HeroSection: React.FC = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <Section id="home" className="pt-32 md:pt-48 lg:pt-56 pb-20 md:pb-28 min-h-screen flex items-center">
      <div className="text-center">
        {/* SEO: O <h1> é o título mais importante da página. */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-spline text-ax-light tracking-tighter mb-6">
          Inovação Pragmática. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ax-primary to-ax-accent">
            Crescimento Mensurável.
          </span>
        </h1>
        <p className="max-w-xl md:max-w-2xl mx-auto text-lg md:text-xl text-ax-sub mb-10">
          Aximora é uma agência de crescimento digital que constrói a próxima geração de experiências web. Combinamos dados, tecnologia e criatividade para gerar resultados que importam.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            variant="primary"
            className="animate-subtle-pulse"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Iniciar um Projeto
          </Button>
          <Button
            variant="secondary"
            onClick={(e) => handleNavClick(e, '#cases')}
          >
            Veja Nossos Cases
          </Button>
        </div>
      </div>
    </Section>
  );
};