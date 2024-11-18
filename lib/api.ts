export interface Article {
  id: string;
  title: string;
  content: string;
  snippet: string;
  source: string;
  category: string;
  date: string;
  author: string;
  sourceUrl: string;
  sentiment: string;
  sentimentScore: number;
}

export interface ArticleResponse {
  data: Article[];
  total: number;
}

export const fetchArticles = async (skip: number, limit: number): Promise<ArticleResponse> => {
  const response = await fetch(`https://threatintel-api.onrender.com/articles?skip=${skip}&limit=${limit}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  
  const articles = await response.json();
  
  return {
    data: articles,
    total: articles.length // Note: API doesn't provide total count, using length as fallback
  };
};

export const searchArticles = async (searchTerm: string): Promise<Article[]> => {
  const response = await fetch(`https://threatintel-api.onrender.com/articles?skip=0&limit=100`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  
  const articles = await response.json();
  
  return articles.filter((article: Article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const fetchArticleById = async (id: string): Promise<Article> => {
  const response = await fetch(`https://threatintel-api.onrender.com/articles?skip=0&limit=100`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  
  const articles = await response.json();
  const article = articles.find((article: Article) => article.id === id);
  
  if (!article) {
    throw new Error('Article not found');
  }
  
  return article;
}; 