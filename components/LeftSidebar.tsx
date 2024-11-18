"use client"

import { useState } from 'react';
import { Rss, Bell, Calendar, Bookmark, CheckSquare, Hash, Globe, Database, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DatePickerWithRange } from '@/components/DatePickerWithRange';
import { DateRange } from "react-day-picker";

export default function LeftSidebar({ 
  onFilterChange, 
  className 
}: {
  onFilterChange: (filters: { topics: string[], sources: string[], dateRange: { from?: Date, to?: Date } }) => void,
  className?: string
}) {
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<{ from?: Date, to?: Date }>({ from: undefined, to: undefined });

  const topics = ['cloud security', 'web security', 'network security', 'application security', 'malware analysis'];
  const sources = ['k8security.io', 'websec.researchweb', 'redrays.io', 'threatintel.org', 'soatok.blog', 'securityboulevard.com', 'sentinelone.com/blog', 'aws.amazon.com', 'unit42.paloaltonetworks.com'];

  const handleTopicChange = (topic: string) => {
    const updatedTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter(t => t !== topic)
      : [...selectedTopics, topic];
    setSelectedTopics(updatedTopics);
    onFilterChange({ topics: updatedTopics, sources: selectedSources, dateRange });
  };

  const handleSourceChange = (source: string) => {
    const updatedSources = selectedSources.includes(source)
      ? selectedSources.filter(s => s !== source)
      : [...selectedSources, source];
    setSelectedSources(updatedSources);
    onFilterChange({ topics: selectedTopics, sources: updatedSources, dateRange });
  };

  const handleDateRangeChange = (range: DateRange | undefined) => {
    setDateRange(range || { from: undefined, to: undefined });
    onFilterChange({ topics: selectedTopics, sources: selectedSources, dateRange: range || { from: undefined, to: undefined } });
  };

  return (
    <aside className={`bg-background p-4 overflow-y-auto border-r border-border ${className}`}>
      <nav>
        <ul className="space-y-2">
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <Rss className="mr-2 h-4 w-4" />
              My Feed
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-2 h-4 w-4" />
              All Alerts
            </Button>
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Filter Alerts by
        </h3>
        <ul className="space-y-2">
          <li>
            <Button
              variant="ghost"
              className="w-full justify-between"
              onClick={() => setTopicsOpen(!topicsOpen)}
            >
              <span className="flex items-center">
                <Hash className="mr-2 h-4 w-4" />
                Topics
              </span>
              {topicsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
            {topicsOpen && (
              <div className="ml-6 mt-2 space-y-2">
                {topics.map((topic) => (
                  <div key={topic} className="flex items-center">
                    <Checkbox
                      id={`topic-${topic}`}
                      checked={selectedTopics.includes(topic)}
                      onCheckedChange={() => handleTopicChange(topic)}
                    />
                    <label htmlFor={`topic-${topic}`} className="ml-2 text-sm">{topic}</label>
                  </div>
                ))}
              </div>
            )}
          </li>
          <li>
            <Button
              variant="ghost"
              className="w-full justify-between"
              onClick={() => setSourcesOpen(!sourcesOpen)}
            >
              <span className="flex items-center">
                <Globe className="mr-2 h-4 w-4" />
                Sources
              </span>
              {sourcesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
            {sourcesOpen && (
              <div className="ml-6 mt-2 space-y-2">
                {sources.map((source) => (
                  <div key={source} className="flex items-center">
                    <Checkbox
                      id={`source-${source}`}
                      checked={selectedSources.includes(source)}
                      onCheckedChange={() => handleSourceChange(source)}
                    />
                    <label htmlFor={`source-${source}`} className="ml-2 text-sm">{source}</label>
                  </div>
                ))}
              </div>
            )}
          </li>
          <li>
            <DatePickerWithRange onDateRangeChange={handleDateRangeChange} />
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <Bookmark className="mr-2 h-4 w-4" />
              Bookmarks
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <CheckSquare className="mr-2 h-4 w-4" />
              Marked as Read
            </Button>
          </li>
        </ul>
      </div>
    </aside>
  );
}