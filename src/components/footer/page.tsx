'use client';

import Logo from '@/components/logo/page';
import Link from 'next/link';

const Footer = () => {
  const sections = [
    {
    title: 'VOICES',
    links: [
      { href: '/voices', label: 'Community Voices' },
      { href: '/voices', label: 'Different Futures' },
    ],
    },
    {
    title: 'RESOURCES',
    links: [
      { href: '/resources/services', label: 'Services' },
      { href: '/resources/research', label: 'Research' },
      { href: '/resources/campaigns', label: 'Campaigns' },
    ],
    },
    {
    title: 'ABOUT',
    links: [
      { href: '/about', label: 'Get to Know Us' },
      { href: '/landscapes-map', label: 'View Images' },
    ],
    },
    {
    title: 'MORE',
    links: [{ href: '/contact-us', label: 'Contact Us' }],
    },
  ];

  return (
    <footer className="border-t/midgray shadow-md text-md bg-midgray text-foreground">
      <div className="max-w-screen-xl grid gap-4 md:grid-cols-5 px-20 py-20 font-mono">
        <div className="mr-4 text-foreground">
          {Logo}
        </div>
        {sections.map((section, index) => (
          <div key={index} className="mx-2">
          <h3 className="text-lg">{section.title}</h3>
          <ul className="py-2">
            {section.links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <Link href={link.href} className="hover:underline text-sm text-lightgray">
              {link.label}
              </Link>
            </li>
            ))}
          </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;