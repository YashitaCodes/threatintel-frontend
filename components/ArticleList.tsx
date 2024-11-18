"use client"

import { useState, useEffect } from 'react';
import { Bookmark, Share, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { fetchArticles, searchArticles, ArticleResponse, Article } from '@/lib/api';
import {     
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ArticleListProps {
  filters: {
    topics: string[];
    sources: string[];
    dateRange: {
      from?: Date;
      to?: Date;
    };
  };
  searchTerm?: string;
}

const ITEMS_PER_PAGE = 100;

export default function ArticleList({ filters, searchTerm = '' }: ArticleListProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let data: Article[];
        
        if (searchTerm) {
          data = await searchArticles(searchTerm);
          setTotalArticles(data.length);
        } else {
          const skip = (currentPage - 1) * ITEMS_PER_PAGE;
          const response: ArticleResponse = await fetchArticles(skip, ITEMS_PER_PAGE);
          data = response.data;
          setTotalArticles(response.total);
        }

        // Apply filters
        let filteredData = data;
        if (filters.topics.length > 0) {
          filteredData = filteredData.filter(article => 
            filters.topics.includes(article.category)
          );
        }

        if (filters.sources.length > 0) {
          filteredData = filteredData.filter(article => 
            filters.sources.includes(article.source)
          );
        }

        if (filters.dateRange.from && filters.dateRange.to) {
          filteredData = filteredData.filter(article => {
            const articleDate = new Date(article.date);
            return articleDate >= filters.dateRange.from! && articleDate <= filters.dateRange.to!;
          });
        }

        setArticles(filteredData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch articles');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters, searchTerm, currentPage]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <div key={article.id} className="bg-card text-card-foreground border border-border shadow rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
            <div className="mb-2 sm:mb-0">
              <span className="text-sm text-muted-foreground">{article.source}</span>
              <Badge variant="secondary" className="ml-2">
                {article.category}
              </Badge>
            </div>
            <span className="text-sm text-muted-foreground">{article.date}</span>
          </div>
          <Link href={`/article/${article.id}`} className="hover:underline">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">{article.title}</h2>
          </Link>
          <p className="text-muted-foreground mb-4">{article.snippet}</p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Bookmark className="h-4 w-4 mr-1" />
              Bookmark
            </Button>
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-1" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <CheckSquare className="h-4 w-4 mr-1" />
              Mark as read
            </Button>
          </div>
        </div>
      ))}

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => currentPage > 1 && setCurrentPage(p => p - 1)}
                aria-disabled={currentPage === 1}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            {/* Add page numbers here if needed */}
            <PaginationItem>
              <PaginationNext 
                onClick={() => currentPage < totalPages && setCurrentPage(p => p + 1)}
                aria-disabled={currentPage === totalPages}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}