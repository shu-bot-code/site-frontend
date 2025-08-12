import React from 'react';
import { Section } from '../components/Section';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { TrendingUpIcon } from '../components/icons/TrendingUpIcon';
import { CodeIcon } from '../components/icons/CodeIcon';
import { BarChartIcon } from '../components/icons/BarChartIcon';
import { TargetIcon } from '../components/icons/TargetIcon';

const services = [
  {
    icon: <TrendingUpIcon className="w-8 h-8" />,
    title: 'SEO & Estratégia de Conteúdo',
    description: 'Eleve sua presença orgânica com SEO orientado por dados e conteúdo que ressoa com seu público e com os motores de busca.',
  },
  {
    icon: <CodeIcon className="w-8 h-8" />,
    title: 'Desenvolvimento Web de Alta Performance',
    description: 'Construímos sites ultra-rápidos, acessíveis e escaláveis usando tecnologias modernas que proporcionam uma experiência de usuário impecável.',
  },
  {
    icon: <BarChartIcon className="w-8 h-8" />,
    title: 'Dados & Analytics',
    description: 'Transforme dados em seu ativo mais valioso. Implementamos analytics robustos para descobrir insights e impulsionar decisões estratégicas.',
  },
  {
    icon: <TargetIcon className="w-8 h-8" />,
    title: 'Otimização de Conversão (CRO)',
    description: 'Através de testes rigorosos e análise de comportamento do usuário, otimizamos seus funis para maximizar conversões e ROI.',
  },
];

/**
 * @component ServicesSection
 * @description Exibe os principais serviços oferecidos pela agência.
 */
export const ServicesSection: React.FC = () => {
  return (
    <Section id="services" className="bg-ax-dark">
      <SectionHeader
        badge="O Que Fazemos"
        title="Nossos Serviços Principais"
        description="Oferecemos um conjunto focado de serviços projetados para entregar crescimento tangível e uma vantagem competitiva no cenário digital."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
};