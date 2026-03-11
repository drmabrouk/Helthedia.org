'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import Link from 'next/link';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mocking an async registration delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Default role for new users is 'User'
    login(email, 'User');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md border border-gray-200 p-8 shadow-sm">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tighter mb-2">REGISTER</h1>
          <p className="text-sm text-gray-500">Join Helthedia and bookmark critical research.</p>
        </div>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-black p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="e.g., Dr. Elena Rodriguez"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-black p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="e.g., researcher@helthedia.org"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-black p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors disabled:bg-gray-300"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs">
          <p className="text-gray-500 mb-2">Already have an account?</p>
          <Link href="/login" className="font-bold underline uppercase tracking-widest">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
