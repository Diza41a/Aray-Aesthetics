/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import Link from 'next/link';

// helpers
import { toggleClass } from './helpers.js';

export default function Header() {
  const navRef = useRef(null);

  // Methods
  const toggleNav = (e) => {
    const navEl = navRef.current;
    toggleClass(navEl, 'hidden');
  }

  return (
    <header>
      <div className="logo">
        <Link href="/">Aray Aesthetics</Link>
      </div>
      <div className="tools">
        <div className="theme-selector-toggle">
          <i className="fa-solid fa-paintbrush" />
          <i className="fa-solid fa-chevron-down arrow" />
        </div>
        <i className="fa-solid fa-bars burger" onClick={toggleNav} />
      </div>
      <nav ref={navRef} className="hidden">
        <Link href="/about">About me</Link>
        <Link href="/services">Services</Link>
        <Link href="/gallery">Works</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};
