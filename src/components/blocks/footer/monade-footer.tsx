// Path: src/components/blocks/footer/monade-footer.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Shapes, Linkedin, Twitter, Github } from 'lucide-react';

const MonadeLogo = () => (
  <Link href="/" className="inline-flex items-center gap-2.5 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-md p-1 -m-1">
    <Shapes className="h-7 w-7 text-primary" />
    <span className="font-display text-2xl font-bold tracking-tight">Monade.ai</span>
  </Link>
);

const linkSections = [
  {
    title: 'Product',
    links: [
      { name: 'Platform', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Security', href: '#' },
    ],
  },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

const legalLinks = [
  { name: 'Privacy', href: '#' },
  { name: 'Terms', href: '#' },
  { name: 'Cookies', href: '#' },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.li whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
    <Link
      href={href}
      className="text-slate-300 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white"
    >
      {children}
    </Link>
  </motion.li>
);

export default function MonadeFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 font-body">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <MonadeLogo />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              AI-powered development platform
            </p>
          </div>

          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-white">
                {section.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {section.links.map((link) => (
                  <FooterLink key={link.name} href={link.href}>
                    {link.name}
                  </FooterLink>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-slate-700 pt-8">
          <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-col items-center gap-4 text-sm text-slate-500 sm:flex-row sm:gap-6">
              <p>&copy; {currentYear} Monade, Inc. All rights reserved.</p>
              <nav aria-label="Footer Legal Links" className="flex gap-4 sm:gap-6">
                {legalLinks.map((link) => (
                    <Link 
                        key={link.name} 
                        href={link.href}
                        className="transition-colors duration-300 hover:text-slate-300 focus:outline-none focus-visible:text-slate-300"
                    >
                        {link.name}
                    </Link>
                ))}
              </nav>
            </div>
            
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={`Visit Monade.ai on ${social.name}`}
                  className="text-slate-400 transition-colors duration-300 hover:text-secondary focus:outline-none focus-visible:text-secondary"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
