'use client';

import { Session } from '@/auth';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Menu, Sparkles, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LogoutButton from '../logout-button';

export const Navigation = ({
  session,
  isAuthRoute
}: {
  session: Session | null;
  isAuthRoute?: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Simple function to scroll to top with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    router.push('/');
  };

  // Simple function to handle anchor clicks
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    if (href === '#') {
      scrollToTop();
      return;
    }

    const element = document.querySelector(href || '');
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 30; // Account for header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/75 backdrop-blur-md border-b-1 z-50 bg-gradient-to-r from-purple-600/5 via-violet-600/5 to-purple-600/5">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div
              onClick={scrollToTop}
              className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              AutoBrief
            </span>
          </Link>

          {!session && !isAuthRoute && (
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-8">
                <a
                  href="#features"
                  onClick={handleNavClick}
                  className="text-gray-700 hover:text-purple-600 transition-colors">
                  Features
                </a>
                <a
                  href="#how-it-works"
                  onClick={handleNavClick}
                  className="text-gray-700 hover:text-purple-600 transition-colors">
                  How it Works
                </a>
                <a
                  href="#pricing"
                  onClick={handleNavClick}
                  className="text-gray-700 hover:text-purple-600 transition-colors">
                  Pricing
                </a>
              </div>
            </div>
          )}

          <div className="hidden md:block flex-shrink-0">
            {session ? (
              <LogoutButton />
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  onClick={() => router.push('/sign-in')}
                  className="border border-purple-400 text-purple-800">
                  Sign In
                </Button>
                <Button
                  onClick={() => router.push('/sign-up')}
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                  Get Started
                </Button>
              </div>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-50 border-1 rounded-xl shadow-lg shadow-purple-400/50 border-purple-400">
              <a
                href="#features"
                onClick={handleNavClick}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Features
              </a>
              <Separator className="bg-purple-200" />
              <a
                href="#how-it-works"
                onClick={handleNavClick}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                How it Works
              </a>
              <Separator className="bg-purple-200" />
              <a
                href="#pricing"
                onClick={handleNavClick}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Pricing
              </a>
              <Separator className="bg-purple-200" />
              <Button className="w-full mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
