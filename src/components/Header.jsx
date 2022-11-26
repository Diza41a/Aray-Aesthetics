/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';

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
        <span>Aray Aesthetics</span>
      </div>
      <div className="tools">
        <div className="theme-selector-toggle">
          <i className="fa-solid fa-paintbrush" />
          <i className="fa-solid fa-chevron-down arrow" />
        </div>
        <i className="fa-solid fa-bars burger" onClick={toggleNav} />
      </div>
      <nav ref={navRef} className="hidden">
        <a href="#">About me</a>
        <a href="#">Services</a>
        <a href="#">Works</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};
