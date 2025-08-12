import React from 'react';
import { Section } from '../components/Section';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';

const caseStudies = [
  {
    client: 'Startup Fintech',
    title: 'Aumento de 250% em Leads Orgânicos',
    description: 'Hipótese: Reestruturando a arquitetura do site e focando em palavras-chave de cauda longa, poderíamos capturar tráfego orgânico de maior intenção. Resultado: Aumento de 250% em leads orgânicos qualificados em 6 meses.',
  },
  {
    client: 'Marca de E-commerce',
    title: 'Melhora de 70% na Velocidade de Carregamento',
    description: 'Hipótese: Uma migração para um framework frontend moderno e otimização de imagens reduziriam drasticamente o tempo de carregamento. Resultado: O tempo médio de carregamento caiu de 4.2s para 1.2s, aumentando a conversão em 15%.',
  },
  {
    client: 'Plataforma SaaS',
    title: 'Unificação de Dados de Clientes para Insights',
    description: 'Hipótese: A implementação de um data warehouse centralizado quebraria silos e revelaria padrões de comportamento do usuário. Resultado: Identificamos pontos chave de abandono na jornada, levando a um aumento de 20% na retenção.',
  },
];

/**
 * @component CasesSection
 * @description Apresenta uma seleção de cases de sucesso para demonstrar a expertise da agência.
 */
export const CasesSection: React.FC = () => {
  return (
    <Section id="cases" className="bg-black/20">
      <SectionHeader
        badge="Nosso Trabalho"
        title="Cases de Sucesso"
        description="Acreditamos em resultados. Nossa abordagem é validada pelo sucesso real que entregamos aos nossos clientes."
      />
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <Card
            key={index}
            subtitle={study.client}
            title={study.title}
            description={study.description}
          />
        ))}
      </div>
    </Section>
  );
};