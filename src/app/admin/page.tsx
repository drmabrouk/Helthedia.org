'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'Admin')) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user || user.role !== 'Admin') {
    return <div className="p-12 text-center font-mono">Verifying permissions...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-12 pb-8 border-b border-black">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter mb-2 uppercase">ADMIN CONSOLE</h1>
          <p className="text-gray-500 font-medium tracking-widest text-[10px] uppercase">Helthedia.org System Management</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
            System Reports
          </button>
          <button className="border border-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            Database Sync
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="p-6 border border-gray-100 bg-white">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Total Users</p>
          <p className="text-3xl font-bold tracking-tighter">4,822</p>
          <p className="text-[10px] text-green-600 mt-2 font-bold uppercase tracking-widest">+124 This Month</p>
        </div>
        <div className="p-6 border border-gray-100 bg-white">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Active Trials</p>
          <p className="text-3xl font-bold tracking-tighter">18,341</p>
          <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">NCT Registered</p>
        </div>
        <div className="p-6 border border-gray-100 bg-white">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">API Requests</p>
          <p className="text-3xl font-bold tracking-tighter">1.2M</p>
          <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">Global Ingress</p>
        </div>
        <div className="p-6 border border-gray-100 bg-white">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Uptime</p>
          <p className="text-3xl font-bold tracking-tighter">99.98%</p>
          <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">Operational</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <section className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center border-b border-black pb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest">Recent Research Submissions</h2>
            <button className="text-[10px] font-bold uppercase underline">Manage Entries</button>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="text-[10px] uppercase tracking-widest font-bold text-gray-400 border-b border-gray-100">
              <tr>
                <th className="py-4">Journal</th>
                <th className="py-4">Status</th>
                <th className="py-4">Added By</th>
                <th className="py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-4 font-bold">Nature Neuroscience</td>
                <td className="py-4 text-[10px] font-bold uppercase text-green-600">Verified</td>
                <td className="py-4 text-gray-500">Auto-indexer</td>
                <td className="py-4 text-right">
                  <button className="text-[10px] font-bold underline mr-4">Edit</button>
                  <button className="text-[10px] font-bold text-red-600 underline">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="py-4 font-bold">New England Journal</td>
                <td className="py-4 text-[10px] font-bold uppercase text-yellow-600">Pending Review</td>
                <td className="py-4 text-gray-500">Dr. Sarah Johnson</td>
                <td className="py-4 text-right">
                  <button className="text-[10px] font-bold underline mr-4">Approve</button>
                  <button className="text-[10px] font-bold text-red-600 underline">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="space-y-6">
          <div className="flex justify-between items-center border-b border-black pb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest">System Events</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-gray-50">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 shrink-0">12:34</span>
              <p className="text-xs">Database sync with <span className="font-bold">PubMed</span> successful.</p>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 shrink-0">11:20</span>
              <p className="text-xs">Unauthorized login attempt from <span className="font-bold">192.168.1.1</span>.</p>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 shrink-0">09:15</span>
              <p className="text-xs">New systematic review indexed in <span className="font-bold">Clinical Trials</span>.</p>
            </div>
          </div>
          <button className="w-full border border-gray-200 py-3 text-[10px] font-bold uppercase tracking-widest hover:border-black transition-colors">
            View Full System Log
          </button>
        </section>
      </div>
    </div>
  );
}
