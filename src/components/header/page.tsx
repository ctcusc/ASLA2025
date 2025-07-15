'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItems } from '@/lib/navigation';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const logo = (
    <div>
        <Link href="/" className="text-xl font-bold cursor-pointer">
            Affordable South LA
        </Link>
    </div>
  );

  return (
    <nav className="bg-white border-b shadow-md">
      <div className="flex justify-between items-center px-8 py-4">
        {logo}
        <div className="hidden md:flex space-x-6 items-center">
          {MenuItems.map((item) => (
            <Link key={item.url} href={item.url} className="text-sm text-gray-800 hover:underline">
              {item.title}
            </Link>
          ))}
        </div>
        <button onClick={toggleMenu} className="md:hidden w-6 h-6 relative">
          <Image
            src={open ? '/x.png' : '/bars.png'}
            alt="Menu icon"
            fill
            className="object-contain"
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
          {MenuItems.map((item) => (
            <Link key={item.url} href={item.url} className="text-sm text-gray-800 hover:underline">
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;