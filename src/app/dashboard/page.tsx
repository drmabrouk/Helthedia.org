'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return <div className="p-12 text-center font-mono">Loading dashboard...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-gray-100">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter mb-2 uppercase">Your Dashboard</h1>
          <p className="text-gray-500 font-medium">Welcome back, {user.name} ({user.role})</p>
        </div>
        <Link
          href="/search"
          className="mt-6 md:mt-0 bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
        >
          New Search
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Bookmarked Research */}
        <section className="space-y-6">
          <div className="flex justify-between items-center border-b border-black pb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest">Bookmarked Research</h2>
            <span className="text-[10px] font-bold text-gray-400">3 TOTAL</span>
          </div>
          <div className="space-y-6">
            <article className="group">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 px-2 py-0.5 mb-2 inline-block">
                Journal Article
              </span>
              <h3 className="text-lg font-bold group-hover:underline underline-offset-4 decoration-1 leading-tight">
                <a href="#">Neural Architecture of Cognitive Flexibility in Aging Populations</a>
              </h3>
              <p className="text-xs text-gray-500 mt-1">Nature Neuroscience • 2024</p>
            </article>
            <article className="group">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 px-2 py-0.5 mb-2 inline-block">
                Systematic Review
              </span>
              <h3 className="text-lg font-bold group-hover:underline underline-offset-4 decoration-1 leading-tight">
                <a href="#">Efficacy of mRNA Vaccines against SARS-CoV-2 Variants</a>
              </h3>
              <p className="text-xs text-gray-500 mt-1">The Lancet Infectious Diseases • 2023</p>
            </article>
          </div>
          <button className="text-xs font-bold underline uppercase tracking-widest text-gray-400 hover:text-black">
            View All Bookmarks
          </button>
        </section>

        {/* Saved Searches */}
        <section className="space-y-6">
          <div className="flex justify-between items-center border-b border-black pb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest">Saved Searches</h2>
            <span className="text-[10px] font-bold text-gray-400">2 TOTAL</span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border border-gray-100 hover:border-black transition-colors group">
              <div>
                <p className="text-sm font-bold italic">"Oncology Precision Medicine"</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Filters: Clinical Trials, 2023-2024</p>
              </div>
              <Link href="/search?q=oncology" className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity underline decoration-1">
                Run
              </Link>
            </div>
            <div className="flex justify-between items-center p-4 border border-gray-100 hover:border-black transition-colors group">
              <div>
                <p className="text-sm font-bold italic">"CRISPR sickle cell trial"</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Filters: Any time</p>
              </div>
              <Link href="/search?q=CRISPR" className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity underline decoration-1">
                Run
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-20 p-8 bg-gray-50 border border-gray-100">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Account Preferences</h3>
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Language</p>
            <p className="text-sm font-medium">English (Scientific)</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Citations Format</p>
            <p className="text-sm font-medium">APA 7th Edition</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Notifications</p>
            <p className="text-sm font-medium">Weekly Digest (Active)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
