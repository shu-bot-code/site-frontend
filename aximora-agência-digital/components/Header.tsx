import React, { useState, useEffect } from 'react';
import type { NavItem } from '../types';
import { LogoIcon } from './icons/LogoIcon';

const navItems: NavItem[] = [
  { name: 'Serviços', href: '#services' },
  { name: 'Cases', href: '#cases' },
  { name: 'Metodologia', href: '#approach' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contato', href: '#contact' },
];

/**
 * @component Header
 * @description Cabeçalho fixo da página com navegação principal e CTA.
 * O fundo se torna semi-transparente com efeito de desfoque ao rolar a página.
 */
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // OPTIMIZATION: Ouve o evento de scroll uma única vez para otimizar a performance.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  /**
   * @function handleNavClick
   * @description Gerencia a navegação com rolagem suave para as seções da página.
   * @param {React.MouseEvent<HTMLAnchorElement>} e - O evento de clique.
   * @param {string} href - O ID da seção de destino.
   */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-ax-dark/80 backdrop-blur-lg border-b border-ax-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2" aria-label="Aximora Início">
          <LogoIcon className="h-8 w-8 text-ax-primary" />
          <span className="text-xl font-spline font-bold text-ax-light">Aximora</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-ax-sub hover:text-ax-light transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden md:inline-block px-5 py-2 text-sm font-bold text-ax-dark bg-ax-primary rounded-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-ax-primary focus:ring-offset-2 focus:ring-offset-ax-dark"
        >
          Entre em Contato
        </a>
        {/* A11Y: Um menu mobile (hambúrguer) pode ser adicionado aqui para responsividade. */}
      </div>
    </header>
  );
};