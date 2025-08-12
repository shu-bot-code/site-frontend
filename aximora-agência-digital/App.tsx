
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { CasesSection } from './sections/CasesSection';
import { ApproachSection } from './sections/ApproachSection';
import { ResourcesSection } from './sections/ResourcesSection';
import { BlogSection } from './sections/BlogSection';
import { ContactSection } from './sections/ContactSection';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <CasesSection />
        <ApproachSection />
        <ResourcesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
