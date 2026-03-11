import SearchInput from "@/components/SearchInput";

export default function Home() {
  const categories = [
    "Clinical Trials", "Oncology", "Neurology", "Cardiology",
    "Immunology", "Public Health", "Genetics", "Pharmacology"
  ];

  return (
    <main className="flex flex-col items-center justify-center pt-20 pb-16 px-6">
      <section className="w-full max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          HELTHEDIA
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Search over 50 million peer-reviewed papers, clinical trials, and scientific journals.
        </p>

        <SearchInput className="mb-12" />

        <nav className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8" aria-label="Research categories">
          {categories.map((category) => (
            <a
              key={category}
              href={`/search?q=${encodeURIComponent(category)}`}
              className="px-4 py-3 border border-gray-200 text-sm font-medium hover:border-black transition-colors"
            >
              {category}
            </a>
          ))}
        </nav>
      </section>

      <section className="mt-32 w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-16">
          <article>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Reliable Sources</h3>
            <p className="text-gray-600 leading-relaxed">
              We exclusively index peer-reviewed journals and verified clinical trial databases to ensure scientific integrity.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Advanced Filtering</h3>
            <p className="text-gray-600 leading-relaxed">
              Refine your search by date, author, impact factor, and study type with our powerful filtering system.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Open Access</h3>
            <p className="text-gray-600 leading-relaxed">
              Easily identify and access open-access research papers and datasets for your institutional needs.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
