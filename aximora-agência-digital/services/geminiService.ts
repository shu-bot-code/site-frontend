import { GoogleGenAI, Type } from "@google/genai";
import type { ContactFormData, BlogPost } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // AVISO: A chave da API não foi encontrada. O app usará dados de fallback.
  console.warn("Chave da API do Gemini não encontrada. Defina a variável de ambiente process.env.API_KEY.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

// Define o schema esperado para a resposta da API ao gerar posts.
const blogPostSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      title: {
        type: Type.STRING,
        description: 'Um título cativante e otimizado para SEO para o post do blog.'
      },
      category: {
        type: Type.STRING,
        description: 'Uma categoria relevante como "SEO", "Data Analytics", "Desenvolvimento Web", ou "Estratégia de Marketing".'
      },
      summary: {
        type: Type.STRING,
        description: 'Um resumo conciso de 1-2 frases sobre o conteúdo do post.'
      }
    },
    required: ["title", "category", "summary"]
  }
};

/**
 * @function generateBlogPosts
 * @description Gera uma lista de 3 ideias de posts para o blog utilizando a API do Gemini.
 * Se a API não estiver disponível, retorna dados estáticos de fallback.
 * @returns {Promise<BlogPost[]>} Uma promessa que resolve para um array de objetos BlogPost.
 */
export const generateBlogPosts = async (): Promise<BlogPost[]> => {
  if (!API_KEY) {
    return Promise.resolve([
      { title: "O Futuro do SEO em um Mundo Sem Cookies", category: "SEO", summary: "Explore como adaptar sua estratégia de SEO para um futuro sem cookies de terceiros." },
      { title: "Desbloqueando Crescimento com Análise Preditiva", category: "Data Analytics", summary: "Aprenda como a análise preditiva pode prever tendências e informar decisões de negócios." },
      { title: "Construindo Sites Ultra-Rápidos com Tecnologia Moderna", category: "Desenvolvimento Web", summary: "Um mergulho nas ferramentas e técnicas para alcançar carregamentos de página em sub-segundos." },
    ]);
  }
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Gere 3 ideias de posts de blog diversificadas e interessantes para uma agência de crescimento digital de ponta chamada Aximora. Os tópicos devem ser relevantes para clientes em potencial que procuram serviços de SEO, data analytics e desenvolvimento web.",
      config: {
        responseMimeType: "application/json",
        responseSchema: blogPostSchema,
        temperature: 0.8,
      },
    });

    const jsonText = response.text.trim();
    const posts = JSON.parse(jsonText) as BlogPost[];
    return posts;
  } catch (error) {
    console.error("Erro ao gerar posts com Gemini:", error);
    // Fallback para dados estáticos em caso de erro na API.
    return [
      { title: "Erro na API: Não foi possível buscar os posts", category: "Sistema", summary: "Houve um problema ao conectar ao serviço de geração de conteúdo. Por favor, tente novamente mais tarde." },
      { title: "Por Que uma Forte Presença Digital é Importante", category: "Estratégia", summary: "Descubra os elementos fundamentais de uma estratégia online de sucesso no mercado atual." },
    ];
  }
};

/**
 * @function processContactForm
 * @description Processa os dados do formulário de contato e gera uma mensagem de confirmação personalizada usando a API do Gemini.
 * @param {ContactFormData} formData - Os dados preenchidos no formulário.
 * @returns {Promise<string>} Uma promessa que resolve para a mensagem de confirmação.
 */
export const processContactForm = async (formData: ContactFormData): Promise<string> => {
    if (!API_KEY) {
        return Promise.resolve(`Obrigado, ${formData.name}! Recebemos sua mensagem sobre seu interesse em ${formData.objective} e entraremos em contato em ${formData.email} em breve. (Esta é uma resposta simulada).`);
    }

    try {
        const prompt = `Um cliente em potencial chamado ${formData.name} da empresa ${formData.company || 'não especificada'} enviou um formulário de contato.
        Seu objetivo é: "${formData.objective}".
        Seu orçamento é: "${formData.budget}".
        Sua mensagem é: "${formData.message}".
        Seu email é ${formData.email}.
        
        Gere uma mensagem de confirmação calorosa, profissional e tranquilizadora em português. Reconheça o nome e o objetivo principal. Confirme que a mensagem foi recebida e que a equipe irá analisá-la e responder ao email em breve. Mantenha a resposta concisa (2-3 frases).`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                temperature: 0.5,
                // OPTIMIZATION: Desabilita o "thinking" para uma resposta de baixa latência, ideal para feedback do usuário.
                thinkingConfig: { thinkingBudget: 0 } 
            },
        });
        
        return response.text;

    } catch (error) {
        console.error("Erro ao processar formulário de contato com Gemini:", error);
        return `Obrigado por seu envio, ${formData.name}. Houve um pequeno problema com nosso sistema de resposta automática, mas garantimos que recebemos sua mensagem e retornaremos para ${formData.email} em breve.`;
    }
};