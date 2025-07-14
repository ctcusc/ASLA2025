'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Footer = () => {

  return (
    <footer className="bg-primary text-md">
    <div className="max-w-screen-xl grid gap-4 md:grid-cols-5 px-20 py-20 mx-auto">
        <div>
            <h1 className="text-xl font-semibold ">Affordable South LA</h1>
        </div>
        <div>
          <h3 className="font-semibold">Voices</h3>
          <ul>
            {/* todo: fix footer links to match jeremy's naming convention */}
            <li><Link href="/voices" className="hover:underline">Community Voices</Link></li>
            <li><Link href="/voices" className="hover:underline">Different Futures</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Resources</h3>
          <ul>
            <li><Link href="/resources/services" className="hover:underline">Services</Link></li>
            <li><Link href="/resources/research" className="hover:underline">Research</Link></li>
            <li><Link href="/resources/campaigns" className="hover:underline">Campaigns</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">About</h3>
          <div>
          <ul>
            <li><Link href="/about" className="hover:underline">Get to know us</Link></li>
            <li><Link href="/landscapes-map" className="hover:underline">View Images</Link></li>
          </ul>
        </div>
        </div>
        <div>
          <h3 className="font-semibold">More</h3>
          <ul>
            <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;