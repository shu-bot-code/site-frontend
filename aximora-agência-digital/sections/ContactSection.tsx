import React, { useState } from 'react';
import { Section } from '../components/Section';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { processContactForm } from '../services/geminiService';
import type { ContactFormData } from '../types';

/**
 * @component ContactSection
 * @description Fornece um formulário para os usuários entrarem em contato com a agência.
 * Gerencia o estado do formulário, o envio e exibe mensagens de sucesso ou erro.
 */
export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    objective: '',
    budget: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setResponseMessage('');

    try {
      const response = await processContactForm(formData);
      setResponseMessage(response);
      // Limpa o formulário após o envio bem-sucedido
      setFormData({ name: '', email: '', company: '', objective: '', budget: '', message: '' }); 
    } catch (err) {
      setError('Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="contact" className="bg-black/20">
      <SectionHeader
        badge="Fale Conosco"
        title="Vamos Construir Algo Incrível"
        description="Tem um projeto em mente ou só quer dizer olá? Adoraríamos ouvir de você. Preencha o formulário abaixo para começar."
      />
      <div className="max-w-3xl mx-auto">
        {responseMessage ? (
          <div className="text-center bg-green-500/10 border border-green-500/30 text-ax-light p-6 rounded-lg" role="status">
            <h3 className="text-xl font-bold mb-2">Obrigado!</h3>
            <p className="text-green-300">{responseMessage}</p>
          </div>
        ) : (
          // A11Y: A validação `required` do HTML é um primeiro nível importante de acessibilidade.
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required className="bg-ax-dark border border-ax-border rounded-lg p-3 focus:ring-2 focus:ring-ax-primary focus:outline-none w-full transition-colors" />
              <input type="email" name="email" placeholder="Seu E-mail" value={formData.email} onChange={handleChange} required className="bg-ax-dark border border-ax-border rounded-lg p-3 focus:ring-2 focus:ring-ax-primary focus:outline-none w-full transition-colors" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                 <input type="text" name="company" placeholder="Sua Empresa (Opcional)" value={formData.company} onChange={handleChange} className="bg-ax-dark border border-ax-border rounded-lg p-3 focus:ring-2 focus:ring-ax-primary focus:outline-none w-full transition-colors" />
                 <select name="budget" value={formData.budget} onChange={handleChange} required className="bg-ax-dark border border-ax-border rounded-lg p-3 focus:ring-2 focus:ring-ax-primary focus:outline-none w-full transition-colors text-ax-sub">
                    <option value="" disabled>Orçamento do Projeto</option>
                    <option value="< $10k">Menos de R$ 50.000</option>
                    <option value="$10k - $25k">R$ 50.000 - R$ 125.000</option>
                    <option value="$25k - $50k">R$ 125.000 - R$ 250.000</option>
                    <option value="$50k+">Acima de R$ 250.000</option>
                 </select>
            </div>
            <input type="text" name="objective" placeholder="Objetivo Principal (ex: Novo Site, Auditoria SEO)" value={formData.objective} onChange={handleChange} required className="bg-ax-dark border border-ax-border rounded-lg p-3 focus:ring-2 focus:ring-ax-primary focus:outline-none w-full transition-colors" />
            <textarea name="message" placeholder="Conte-nos sobre seu projeto..." value={formData.message} onChange={handleChange} required rows={5} className="bg-ax-dark border border-ax-border rounded-lg p-3 focus:ring-2 focus:ring-ax-primary focus:outline-none w-full transition-colors"></textarea>
            <div className="text-center">
              <Button type="submit" isLoading={isLoading} disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </div>
            {error && <p className="text-center text-red-400 mt-4" role="alert">{error}</p>}
          </form>
        )}
      </div>
    </Section>
  );
};