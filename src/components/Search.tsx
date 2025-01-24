import React, { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';

interface SearchProps {
  posts: Array<{
    id: string;
    data: {
      title: string;
      excerpt?: string;
      date?: Date;
      tags?: string[];
    };
  }>;
}

interface SearchResult {
  item: SearchProps['posts'][0];
  refIndex: number;
}

const Search: React.FC<SearchProps> = ({ posts }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const fuse = new Fuse(posts, {
    keys: ['data.title', 'data.excerpt', 'data.tags'],
    includeScore: true,
    threshold: 0.4,
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        closeSearch();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsExpanded(true);
      }
      
      // Escape to close search
      if (event.key === 'Escape' && isExpanded) {
        event.preventDefault();
        closeSearch();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded]);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const closeSearch = () => {
    setIsExpanded(false);
    setQuery('');
    setResults([]);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 0) {
      const searchResults = fuse.search(value);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  const handleSearchIconClick = () => {
    setIsExpanded(true);
  };

  return (
    <div ref={searchRef} className="relative">
      <div className={`flex items-center transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-8'}`}>
        {!isExpanded ? (
          <button
            onClick={handleSearchIconClick}
            className="p-1 hover:text-accent transition-colors group text-gray-700 dark:text-gray-300"
            aria-label="Open search (⌘K)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6" />
            </svg>
            <span className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-gray-800 dark:bg-gray-700 text-white rounded whitespace-nowrap">
              Search (⌘K)
            </span>
          </button>
        ) : (
          <div className="relative w-full">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search posts..."
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 pl-9 pr-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-accent dark:focus:border-accent focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
            >
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6" />
            </svg>
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 dark:text-gray-500">ESC</kbd>
          </div>
        )}
      </div>
      
      {isExpanded && results.length > 0 && (
        <div className="absolute top-full right-0 z-50 mt-2 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 shadow-lg">
          {results.slice(0, 5).map(({ item, refIndex }) => (
            <a
              key={refIndex}
              href={`/blog/${item.id}/`}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={closeSearch}
            >
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.data.title}</div>
              {item.data.excerpt && (
                <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {item.data.excerpt.slice(0, 100)}...
                </div>
              )}
              {item.data.tags && item.data.tags.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1">
                  {item.data.tags.map(tag => (
                    <span key={tag} className="rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search; 