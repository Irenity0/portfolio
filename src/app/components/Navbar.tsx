import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const links = [
    { name: 'About', href: '/about' },
    { name: 'Articles', href: '/articles' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <nav className="flex flex-wrap gap-y-2 font-mono justify-between">
        <Link href={'/'} className='font-bold text-stone-300 hover:text-white'>Afra Anjum</Link>
      <div className="flex gap-1">
        {links.map((link, index) => (
          <React.Fragment key={link.name}>
            <Link href={link.href} className="text-stone-300 font-medium text-sm hover:text-white">
              {link.name}
            </Link>
            {index < links.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
