// Path: src/components/blocks/navbar/monade-navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const MonadeLogo = () => (
  <div className="flex items-center gap-2.5" style={{ height: '32px' }}>
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary h-8 w-8"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M8.53333 16H13.8667L16 11.7333L18.1333 16H23.4667L16 4.26667L8.53333 16Z"
        fill="var(--color-primary-foreground)"
      />
      <path
        d="M11.7333 18.1333L16 27.7333L20.2667 18.1333H11.7333Z"
        fill="var(--color-primary-foreground)"
      />
    </svg>
    <div className="flex items-baseline">
      <span className="font-display text-2xl font-bold text-slate-900 leading-none">
        monade
      </span>
      <span className="font-body text-2xl text-slate-500 leading-none -ml-0.5">
        .ai
      </span>
    </div>
  </div>
);

export default function MonadeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Success Stories", href: "#success-stories" },
    { name: "Use Case", href: "#use-case" },
    { name: "Line Demo", href: "#line-demo" },
    { name: "Docs", href: "#docs" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ease-in-out bg-background/80 backdrop-blur-sm ${
        isScrolled || isMenuOpen ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <div className="flex items-center lg:flex-1">
            <Link
              href="/"
              aria-label="Monade.ai Homepage"
              onClick={() => setIsMenuOpen(false)}
            >
              <MonadeLogo />
            </Link>
          </div>

          <nav
            className="hidden lg:flex"
            aria-label="Main navigation"
          >
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative group py-2 font-body font-medium text-sm text-text transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    <span>{item.name}</span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-secondary origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end lg:flex-1 gap-2">
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="#sign-in"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-secondary-foreground bg-transparent border border-secondary rounded-lg hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-background bg-secondary rounded-lg hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border-t border-border bg-background">
              <div className="px-4 pt-4 pb-6 sm:px-6">
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 text-base font-medium text-text hover:text-slate-900 hover:bg-slate-50 rounded-md px-3"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 mt-2 border-t border-border flex flex-row gap-2">
                    <Link
                      href="#sign-in"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-secondary-foreground bg-transparent border border-secondary rounded-lg hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors mb-2"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="#get-started"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-background bg-secondary rounded-lg hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}