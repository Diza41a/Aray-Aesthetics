/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeContext } from '../pages/_app.js';

// helpers
import { toggleClass } from './helpers.js';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const router = useRouter();
  const themeToggleRef = useRef(null);
  const navRef = useRef(null);

  const themeOptions = [
    'main-theme', 'light-theme',
  ];
  const defaultThemeOption = themeOptions[0];

  // Methods
  const toggleNav = (e) => {
    const navEl = navRef.current;
    toggleClass(navEl, 'hidden');
  };

  const toggleThemeMenu = (e) => {
    const themeToggleEl = themeToggleRef.current;
    toggleClass(themeToggleEl, 'dropped');
  };

  const changeTheme = (e) => {
    const targetEl = e.target;
    if (targetEl.nodeName !== 'LI') {
      return;
    }
    const selectedTheme = targetEl.getAttribute('data-theme');

    const parentEl = targetEl.closest('ul');
    for (const option of [...parentEl.children]) {
      if (option.classList.contains('active')) {
        option.classList.remove('active');
      }
    }

    targetEl.classList.add('active');
    window.localStorage.setItem('theme', selectedTheme);
    toggleTheme(selectedTheme);
  };

  return (
    <header>
      <div className="logo">
        <Link href="/" className={router.pathname === '/' ? 'active' : ''}>Aray Aesthetics</Link>
      </div>
      <div className="tools">
        <div className="theme-selector-toggle" ref={themeToggleRef} onClick={toggleThemeMenu}>
          <i className="fa-solid fa-paintbrush" />
          <i className="fa-solid fa-chevron-down arrow" />
          <ul className="theme-option-list" onClick={changeTheme}>
            <li data-theme="main-theme" className={theme === 'main-theme' ? 'active' : ''}>Main</li>
            <li data-theme="light-theme" className={theme === 'light-theme' ? 'active' : ''}>Light</li>
            <li data-theme="dark-theme" className={theme === 'dark-theme' ? 'active' : ''}>Dark</li>
          </ul>
        </div>
        <i className="fa-solid fa-bars burger" onClick={toggleNav} />
      </div>
      <nav ref={navRef} className="hidden">
        <Link href="/about" className={router.pathname === '/about' ? 'active' : ''}>About me</Link>
        <Link href="/services" className={router.pathname === '/services' ? 'active' : ''}>Services</Link>
        <Link href="/gallery" className={router.pathname === '/gallery' ? 'active' : ''}>Works</Link>
        <Link href="/contact" className={router.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>
    </header>
  );
};
