import React from 'react';
import { LogoIcon } from './icons/LogoIcon';

/**
 * @component Footer
 * @description Rodapé do site com informações de copyright e links de privacidade.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-ax-dark border-t border-ax-border">
      <div className="container mx-auto px-6 py-8 text-center text-ax-sub">
        <div className="flex justify-center items-center gap-2 mb-4">
          <LogoIcon className="h-6 w-6 text-ax-sub" />
          <span className="text-lg font-spline font-semibold text-ax-sub">Aximora</span>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aximora. Todos os direitos reservados.
        </p>
        <div className="mt-4 space-x-6 text-sm">
          <a href="#privacy" className="hover:text-ax-light transition-colors">Política de Privacidade</a>
          <a href="#terms" className="hover:text-ax-light transition-colors">Termos de Serviço</a>
        </div>
      </div>
    </footer>
  );
};