"use client"

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ArticleList from '@/components/ArticleList';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import Header from '@/components/Header';

function HomeContent() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<any>({
    topics: [],
    sources: [],
    dateRange: { from: undefined, to: undefined }
  });
  const [searchTerm, setSearchTerm] = useState('');
  const shouldFocus = searchParams.get('focus') === 'search';

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const handleSearch = (term: any) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Header onSearch={handleSearch} autoFocus={shouldFocus} />
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
        <LeftSidebar onFilterChange={handleFilterChange} className="w-full lg:w-64 lg:flex-shrink-0" />
        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Latest Cybersecurity News And Articles</h1>
          <ArticleList filters={filters} searchTerm={searchTerm} />
        </div>
        <RightSidebar className="w-full lg:w-64 lg:flex-shrink-0" />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
