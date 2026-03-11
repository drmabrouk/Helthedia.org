'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useMemo } from 'react';
import { mockPapers, ResearchPaper } from '@/lib/data';

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedJournals, setSelectedJournals] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<'date' | 'relevance'>('relevance');
  const [showFilters, setShowFilters] = useState(false);

  const journals = useMemo(() => Array.from(new Set(mockPapers.map(p => p.journal))).sort(), []);
  const years = useMemo(() => Array.from(new Set(mockPapers.map(p => p.year))).sort((a, b) => b - a), []);

  const filteredResults = useMemo(() => {
    let results = mockPapers.filter(paper =>
      paper.title.toLowerCase().includes(query.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(query.toLowerCase()) ||
      paper.authors.some(a => a.toLowerCase().includes(query.toLowerCase())) ||
      paper.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
    );

    if (selectedTypes.length > 0) {
      results = results.filter(paper => selectedTypes.includes(paper.type));
    }

    if (selectedJournals.length > 0) {
      results = results.filter(paper => selectedJournals.includes(paper.journal));
    }

    if (selectedYears.length > 0) {
      results = results.filter(paper => selectedYears.includes(paper.year));
    }

    if (sortBy === 'date') {
      results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return results;
  }, [query, selectedTypes, selectedJournals, selectedYears, sortBy]);

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleJournal = (journal: string) => {
    setSelectedJournals(prev =>
      prev.includes(journal) ? prev.filter(j => j !== journal) : [...prev, journal]
    );
  };

  const toggleYear = (year: number) => {
    setSelectedYears(prev =>
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  const types = ['Journal Article', 'Clinical Trial', 'Review', 'Systematic Review'];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          className="lg:hidden w-full py-3 border border-black font-bold uppercase tracking-widest text-xs flex justify-between items-center px-4"
          onClick={() => setShowFilters(!showFilters)}
          aria-expanded={showFilters}
          aria-controls="filters-sidebar"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
          <span>{(selectedTypes.length + selectedJournals.length + selectedYears.length) > 0 ? `(${selectedTypes.length + selectedJournals.length + selectedYears.length})` : ''}</span>
        </button>

        {/* Sidebar Filters */}
        <aside
          id="filters-sidebar"
          className={`w-full lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}
        >
          <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-200">
            <h2 className="hidden lg:block font-bold uppercase tracking-wider text-xs mb-6">Filters</h2>

            {/* Study Type */}
            <div className="mb-8 border-t border-gray-100 lg:border-t-0 pt-6 lg:pt-0">
              <h3 className="font-semibold text-sm mb-4">Study Type</h3>
              <div className="grid grid-cols-1 gap-3">
                {types.map(type => (
                  <label key={type} className="flex items-center group cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border-black rounded-none appearance-none border checked:bg-black transition-colors mr-3 cursor-pointer"
                      checked={selectedTypes.includes(type)}
                      onChange={() => toggleType(type)}
                    />
                    <span className="text-sm group-hover:text-gray-600">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Publication Year */}
            <div className="mb-8 border-t border-gray-100 pt-6">
              <h3 className="font-semibold text-sm mb-4">Year</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {years.map(year => (
                  <label key={year} className="flex items-center group cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border-black rounded-none appearance-none border checked:bg-black transition-colors mr-3 cursor-pointer"
                      checked={selectedYears.includes(year)}
                      onChange={() => toggleYear(year)}
                    />
                    <span className="text-sm group-hover:text-gray-600">{year}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Journal */}
            <div className="mb-8 border-t border-gray-100 pt-6 pb-4">
              <h3 className="font-semibold text-sm mb-4">Journal</h3>
              <div className="grid grid-cols-1 gap-3">
                {journals.map(journal => (
                  <label key={journal} className="flex items-start group cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mt-0.5 border-black rounded-none appearance-none border checked:bg-black transition-colors mr-3 cursor-pointer flex-shrink-0"
                      checked={selectedJournals.includes(journal)}
                      onChange={() => toggleJournal(journal)}
                    />
                    <span className="text-xs group-hover:text-gray-600 leading-tight">{journal}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Results List */}
        <main className="flex-grow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-4 border-b border-gray-100 gap-4">
            <p className="text-sm text-gray-500">
              Showing <span className="text-black font-medium">{filteredResults.length}</span> results for <span className="text-black font-medium italic">"{query}"</span>
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Sort by:</span>
              <select
                className="text-sm font-medium focus:outline-none bg-transparent cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort search results"
              >
                <option value="relevance">Relevance</option>
                <option value="date">Newest First</option>
              </select>
            </div>
          </div>

          <div className="space-y-12">
            {filteredResults.length > 0 ? (
              filteredResults.map(paper => (
                <article key={paper.id} className="group border-b border-gray-100 pb-12 last:border-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-2 py-0.5">
                      {paper.type}
                    </span>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                      {paper.journal}
                    </span>
                    <span className="text-xs text-gray-300">•</span>
                    <span className="text-xs text-gray-400">
                      {paper.year}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:underline underline-offset-4 decoration-1 leading-tight">
                    <a href={`#`}>{paper.title}</a>
                  </h2>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                    {paper.abstract}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-4">
                    <div className="flex flex-col">
                      <p className="text-sm font-bold">
                        {paper.authors.join(', ')}
                      </p>
                      <p className="text-xs text-gray-400 font-mono mt-1">
                        DOI: {paper.doi}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <button className="px-4 py-2 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                        View Paper
                      </button>
                      <button className="px-4 py-2 border border-gray-200 text-xs font-bold uppercase tracking-widest hover:border-black transition-all">
                        Cite
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="py-20 text-center">
                <p className="text-xl text-gray-400">No results found matching your criteria.</p>
                <button
                  onClick={() => {setSelectedTypes([]); setSelectedJournals([]); setSelectedYears([]); setSortBy('relevance');}}
                  className="mt-4 text-sm font-bold underline hover:text-gray-600"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center font-mono animate-pulse">Loading results...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
