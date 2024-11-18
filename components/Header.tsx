"use client"

import { Search, Shield } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
interface HeaderProps {
  onSearch?: (searchTerm: string) => void;
  autoFocus?: boolean;
}

export default function Header({ onSearch, autoFocus = false }: HeaderProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (autoFocus && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [autoFocus]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value);
  };

  return (
    <header className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between">
        <Link href="/">
        <div className="flex items-center mb-4 sm:mb-0">
          <Shield className="h-8 w-8 text-primary mr-2" />
          <span className="text-xl font-bold text-foreground">ThreatWatch</span>
        </div>
        </Link>
        <div className="flex-1 max-w-xl mx-4 w-full sm:w-auto mb-4 sm:mb-0">
          <div className="relative">
            <Input
              ref={searchInputRef}
              type="text"
              placeholder="Search Topic, Events"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              onChange={handleSearchInput}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}