'use client'; // required for App Router interactivity

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type FooterLink = {
  title: string;
  url: string;
};

type FooterCategory = {
  heading: string;
  subheadings: FooterLink[];
  heading2?: string;
  subheadings2?: FooterLink[];
};

interface FooterProps {
  admin?: boolean;
  logout?: () => void;
}

const FooterItems: FooterCategory[] = [
  {
    heading: 'Voices',
    subheadings: [
      { title: 'Community Voices', url: '/voices' },
      { title: 'Different Futures', url: '/voices' },
    ],
  },
  {
    heading: 'Resources',
    subheadings: [
      { title: 'Services', url: '/research-campaigns' },
      { title: 'Research', url: '/research-campaigns' },
      { title: 'Campaigns', url: '/research-campaigns' },
    ],
  },
  {
    heading: 'About',
    subheadings: [{ title: 'Get to know us', url: '/about-the-project' }],
    heading2: 'Landscapes',
    subheadings2: [{ title: 'View Images', url: '/landscapes-map' }],
  },
  {
    heading: 'More',
    subheadings: [
      { title: 'Contact Us', url: '/contact-us' },
      { title: 'Admin Sign In', url: '/login' },
    ],
  },
];

// const AdminFooterItems: FooterCategory[] = [
//   {
//     heading: 'Admin',
//     subheadings: [
//       { title: 'Review Submissions', url: '/admin/voices' },
//       { title: 'Edit Research & Campaigns', url: '/admin/resources' },
//       { title: 'View Feedback', url: '/admin/contact' },
//       { title: 'Edit Admin', url: '/admin/edit-admin' },
//     ],
//   },
//   {
//     heading: 'Voices',
//     subheadings: [
//       { title: 'Community Voices', url: '/' },
//       { title: 'Different Futures', url: '/' },
//     ],
//   },
//   {
//     heading: 'Resources',
//     subheadings: [
//       { title: 'Services', url: '/' },
//       { title: 'Research', url: '/' },
//       { title: 'Campaigns', url: '/' },
//     ],
//   },
//   {
//     heading: 'About',
//     subheadings: [{ title: 'Get to know us', url: '/about-the-project' }],
//     heading2: 'Landscapes',
//     subheadings2: [{ title: 'View Images', url: '/landscapes-map' }],
//   },
// ];

const Footer: React.FC<FooterProps> = ({ mobile = false, admin = false, logout }) => {
  const [isMobile, setIsMobile] = useState(false);
  // const items = admin ? AdminFooterItems : FooterItems;
  const items = FooterItems;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="bg-neutral-100 text-neutral-800 text-sm">
      <div className="max-w-screen-xl mx-auto px-6 py-8 grid gap-6 md:grid-cols-4">
        {!isMobile && (
          <div>
            <h2 className="text-lg font-semibold">Affordable South LA</h2>
            {!admin ? (
              <button
                className="mt-4 px-4 py-2 bg-black text-white text-xs rounded hover:bg-neutral-800"
                onClick={() => (window.location.href = '/add-your-voice')}
              >
                Add Your Voice
              </button>
            ) : (
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                onClick={logout}
              >
                Logout
              </button>
            )}
          </div>
        )}

        {items.map(({ heading, subheadings, heading2, subheadings2 }) => (
          <div key={heading}>
            <h3 className="font-semibold mb-2">{heading}</h3>
            <ul className="space-y-1">
              {subheadings.map((link) => (
                <li key={`${heading}-${link.title}`}>
                  <Link href={link.url} className="hover:underline">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {!isMobile && heading2 && subheadings2 && (
              <>
                <h3 className="font-semibold mt-4">{heading2}</h3>
                <ul className="space-y-1">
                  {subheadings2.map((link) => (
                    <li key={`${heading2}-${link.title}`}>
                      <Link href={link.url} className="hover:underline">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {isMobile && heading2 && subheadings2 && (
              <div className="mt-4">
                <h3 className="font-semibold">{heading2}</h3>
                <ul className="space-y-1">
                  {subheadings2.map((link) => (
                    <li key={`${heading2}-${link.title}`}>
                      <Link href={link.url} className="hover:underline">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {isMobile && (
        <div className="text-center py-4">
          <button
            className="px-4 py-2 bg-black text-white text-xs rounded hover:bg-neutral-800"
            onClick={() => (window.location.href = '/add-your-voice')}
          >
            Add Your Voice
          </button>
        </div>
      )}

      <div className="text-center text-xs py-4 border-t border-neutral-300">
        &copy; {new Date().getFullYear()} Affordable South LA
      </div>
    </footer>
  );
};

export default Footer;