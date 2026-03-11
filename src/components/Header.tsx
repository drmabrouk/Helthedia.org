'use client';

import Link from 'next/link';
import { Suspense, useState } from 'react';
import HeaderSearchInput from './HeaderSearchInput';
import { useAuth } from '@/lib/auth-context';

export default function Header() {
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="border-b border-gray-200 py-4 px-6 md:px-12 flex justify-between items-center bg-white sticky top-0 z-50">
      <div className="flex items-center gap-12 flex-grow">
        <Link href="/" className="text-2xl font-bold tracking-tighter shrink-0">
          HELTHEDIA
        </Link>
        <Suspense fallback={<div className="h-10 w-full max-w-md bg-gray-50" />}>
          <HeaderSearchInput />
        </Suspense>
      </div>
      <nav>
        <ul className="flex items-center space-x-8 text-sm font-medium">
          <li>
            <Link href="/journals" className="hover:text-gray-600 transition-colors">
              Journals
            </Link>
          </li>

          {user ? (
            <li className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 hover:text-gray-600 transition-colors font-bold uppercase tracking-widest text-xs"
              >
                {user.name}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C2.185 5.355 2.398 5 2.851 5h9.448c.453 0 .666.355.4 0.658l-4.796 5.482a.5.5 0 0 1-.756 0z"/>
                </svg>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-4 w-48 bg-white border border-gray-200 py-2 shadow-sm z-50">
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-50"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    Dashboard
                  </Link>
                  {user.role === 'Admin' && (
                    <Link
                      href="/admin"
                      className="block px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-50"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      Admin Console
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-600 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>
          ) : (
            <>
              <li>
                <Link href="/login" className="hover:text-gray-600 transition-colors font-bold uppercase tracking-widest text-xs underline underline-offset-4 decoration-1">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                  Join
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
