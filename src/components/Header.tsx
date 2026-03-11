'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import HeaderSearchInput from './HeaderSearchInput';

export default function Header() {
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
        <ul className="flex space-x-8 text-sm font-medium">
          <li>
            <Link href="/journals" className="hover:text-gray-600 transition-colors">
              Journals
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-600 transition-colors">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
