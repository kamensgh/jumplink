'use client';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function TopNav() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <>
        <header className="bg-gray-800">
          <nav className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="text-white text-xl">
                <p>Welcome, {session?.user?.name || session?.user?.email}!</p>
              </div>
              <div className="hidden md:block">
                <ul className="flex items-center space-x-8">
                  <li>
                    <Link
                      href="/home"
                      className={`text-white ${
                        pathname == '/home' ? 'underline' : ''
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/movies"
                      className={`text-white ${
                        pathname.includes('movies') ? 'underline' : ''
                      }`}
                    >
                      Movies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tvshows"
                      className={`text-white ${
                        pathname == '/tvshows' ? 'underline' : ''
                      }`}
                    >
                      TV shows
                    </Link>
                  </li>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => signOut({ callbackUrl: '/' })}
                  >
                    Sign Out
                  </button>
                </ul>
              </div>
              <div className="md:hidden">
                <button className="outline-none mobile-menu-button">
                  <svg
                    className="w-6 h-6 text-white"
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mobile-menu hidden md:hidden">
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-white bg-gray-900 rounded"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-white bg-gray-900 rounded"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-white bg-gray-900 rounded"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-white bg-gray-900 rounded"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
    </>
  );
}

export default TopNav;
