import React from 'react';
import { Section } from '../components/Section';
import { SectionHeader } from '../components/SectionHeader';

const approachSteps = [
  {
    name: 'Descoberta e Estratégia',
    description: 'Começamos por entender profundamente seu negócio, metas e desafios para definir um roteiro claro para o sucesso.',
  },
  {
    name: 'Design e Prototipagem',
    description: 'Focando na experiência do usuário e na identidade da sua marca, projetamos interfaces intuitivas e as validamos com protótipos.',
  },
  {
    name: 'Desenvolvimento Ágil',
    description: 'Nossa equipe constrói sua solução usando uma metodologia ágil, garantindo flexibilidade, transparência e feedback contínuo.',
  },
  {
    name: 'Testes e QA',
    description: 'Testes rigorosos em múltiplos dispositivos e cenários garantem um produto final robusto, livre de bugs e de alta performance.',
  },
  {
    name: 'Lançamento e Otimização',
    description: 'A implantação é apenas o começo. Monitoramos o desempenho e usamos dados para otimizar continuamente o crescimento.',
  },
];

/**
 * @component ApproachSection
 * @description Detalha o processo de trabalho da agência em 5 etapas claras.
 */
export const ApproachSection: React.FC = () => {
  return (
    <Section id="approach">
      <SectionHeader
        badge="Nossa Metodologia"
        title="Uma Estratégia para o Sucesso"
        description="Nosso processo sistemático de 5 etapas garante clareza, colaboração e resultados excepcionais para cada projeto."
      />
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* A11Y: A linha vertical é decorativa e está oculta para leitores de tela. */}
          <div className="absolute left-4 md:left-1/2 top-2 h-[calc(100%-1rem)] w-0.5 bg-ax-border -translate-x-1/2" aria-hidden="true"></div>

          {approachSteps.map((step, index) => (
            <div key={index} className="relative pl-12 md:pl-0 mb-12 last:mb-0">
                <div className="md:flex items-center">
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
                        <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2">
                            <div className="w-8 h-8 rounded-full bg-ax-dark border-2 border-ax-primary flex items-center justify-center">
                                <span className="text-ax-primary font-bold">{index + 1}</span>
                            </div>
                        </div>
                        <div className="bg-ax-dark border border-ax-border rounded-lg p-6">
                            <h3 className="text-xl font-bold font-spline text-ax-light mb-2">{step.name}</h3>
                            <p className="text-ax-sub">{step.description}</p>
                        </div>
                    </div>
                    <div className="md:w-1/2"></div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};