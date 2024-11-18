import { Metadata } from 'next';
import { Bookmark, Share, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import ArticleHeader from '@/components/ArticleHeader';
import { fetchArticleById } from '@/lib/api';

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const article = await fetchArticleById(params.id);
    return { 
      title: article.title,
      description: article.sourceUrl,
    };
  } catch (error) {
    return { 
      title: 'Article Not Found',
      description: 'Article not available',
    };
  }
}

export default async function ArticlePage({ params }: Props) {
  try {
    const article = await fetchArticleById(params.id);

    return (
      <main>
        <ArticleHeader />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/" className="flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="mr-2" /> Back to all articles
          </Link>
          <article>
            <header className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{article.title}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground mb-4">
                <span className="mb-2 sm:mb-0">By {article.author} | {article.date}</span>
                <Badge variant="secondary">{article.category}</Badge>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-1" />
                  Bookmark
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </header>
            <div className="prose dark:prose-invert max-w-none mb-8">
              <p>{article.content}</p>
            </div>
          </article>
        </div>
      </main>
    );
  } catch (error) {
    return <div>Article not found</div>;
  }
}
