import React, { useState, useCallback, useEffect } from 'react';
import { Section } from '../components/Section';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { generateBlogPosts } from '../services/geminiService';
import type { BlogPost } from '../types';

/**
 * @component SkeletonCard
 * @description Componente de esqueleto de UI para indicar o carregamento de conteúdo de um card.
 * Melhora a experiência do usuário ao fornecer feedback visual durante as requisições.
 */
const SkeletonCard: React.FC = () => (
  <div className="bg-ax-dark border border-ax-border rounded-xl p-6 md:p-8 animate-pulse">
    <div className="h-4 bg-ax-border rounded w-1/4 mb-3"></div>
    <div className="h-6 bg-ax-border rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-ax-border rounded w-full mb-2"></div>
    <div className="h-4 bg-ax-border rounded w-5/6"></div>
  </div>
);

/**
 * @component BlogSection
 * @description Seção que busca e exibe dinamicamente ideias de posts geradas pela API do Gemini.
 */
export const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Inicia como true para buscar na montagem
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedPosts = await generateBlogPosts();
      setPosts(fetchedPosts);
    } catch (err) {
      setError('Falha ao carregar os posts. Por favor, tente novamente.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  // A11Y/UX: Usa useEffect para buscar os posts na montagem inicial do componente,
  // garantindo que o conteúdo esteja disponível sem ação do usuário.
  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPosts]);

  return (
    <Section id="blog">
      <SectionHeader
        badge="Insights"
        title="Do Nosso Time"
        description="Explore nossos últimos artigos e pensamentos sobre o cenário digital em constante evolução. Gerado com uma pequena ajuda de nossos amigos da IA."
      />
      
      {isLoading && (
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}

      {!isLoading && error && (
         <div className="text-center text-red-400 bg-red-500/10 p-4 rounded-lg" role="alert">
            <p>{error}</p>
         </div>
      )}

      {!isLoading && !error && posts.length > 0 && (
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              subtitle={post.category}
              title={post.title}
              description={post.summary}
            />
          ))}
        </div>
      )}

      <div className="text-center mt-12">
        <Button variant="secondary" onClick={fetchPosts} isLoading={isLoading}>
          {isLoading ? 'Gerando...' : 'Gerar Novas Ideias'}
        </Button>
      </div>
    </Section>
  );
};