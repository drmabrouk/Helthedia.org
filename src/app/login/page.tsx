'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt for:', email);
    setIsLoading(true);
    // Mocking an async login delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // For demo purposes, any email ending in @admin.com becomes an Admin
    const role = email.endsWith('@admin.com') ? 'Admin' : 'User';
    console.log('Login successful, role:', role);
    login(email, role);
    const target = role === 'Admin' ? '/admin' : '/dashboard';
    console.log('Redirecting to:', target);
    router.push(target);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md border border-gray-200 p-8 shadow-sm">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tighter mb-2">LOGIN</h1>
          <p className="text-sm text-gray-500">Access your personalized research dashboard.</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
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
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-black p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="••••••••"
            />
          </div>
          <button
            id="login-submit"
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors disabled:bg-gray-300"
          >
            {isLoading ? 'Verifying...' : 'Sign In'}
          </button>
        </form>
        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs">
          <p className="text-gray-500 mb-2">Don't have an account?</p>
          <Link href="/register" className="font-bold underline uppercase tracking-widest">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
