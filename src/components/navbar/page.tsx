'use client';

import { useState } from 'react';
import Logo from '@/components/logo/page';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { MenuItems } from '@/lib/navigation';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const MenuDisplay = () => { 
    return (
      MenuItems.map((item) => (
        <Link key={item.url} href={item.url} className="font-light text-lightgray text-sm hover:underline">
          {item.title}
        </Link>
      ))
    );
  };

  return (
    <nav className="border-b/primary shadow-md bg-midgray text-foreground">
      <div className="flex justify-between items-center px-8 py-8">
        {Logo}
        <div className="hidden md:flex space-x-6 items-center">
          <MenuDisplay/>
        </div>
        <button onClick={toggleMenu} className="md:hidden w-6 h-6 flex items-center justify-center">
          {open ? (
            <CloseIcon/>
          ) : (
            <MenuIcon/>
          )}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col items-center space-y-4 px-8 py-4 bg-midgray">
          <MenuDisplay/>
        </div>
      )}
    </nav>
  );
};

export default Navbar;