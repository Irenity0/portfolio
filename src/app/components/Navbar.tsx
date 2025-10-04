'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: 'About', href: '/about' },
    { name: 'Articles', href: '/articles' },
    { name: 'Project', href: '/projects' },
  ];

  return (
    <nav className="flex justify-between items-center py-4">
      <h1 className="font-bold">Afra Anjum</h1>

      <div className="flex items-center gap-1 text-sm font-semibold text-stone-400">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <React.Fragment key={link.name}>
              <Link
                href={link.href}
                className={`relative block px-2 py-1 transition-all duration-500 ease-in-out
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]
                after:bg-white after:transition-transform after:duration-500 after:ease-in-out
                ${isActive ? 'after:scale-x-100 text-white' : 'after:scale-x-0 hover:text-white'}
                after:origin-left`}
              >
                {link.name}
              </Link>
              {index < links.length - 1 && <span className="text-neutral-600">/</span>}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
