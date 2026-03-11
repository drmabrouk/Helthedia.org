'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchInputProps {
  initialValue?: string;
  className?: string;
  placeholder?: string;
}

export default function SearchInput({
  initialValue = '',
  className = '',
  placeholder = 'Search for medical research, papers, trials...'
}: SearchInputProps) {
  const [query, setQuery] = useState(initialValue);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative w-full ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-6 py-4 text-lg border-2 border-black rounded-none focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white placeholder:text-gray-400"
        aria-label="Search medical research"
      />
      <button
        type="submit"
        className="absolute right-2 top-2 bottom-2 px-6 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
      >
        Search
      </button>
    </form>
  );
}
