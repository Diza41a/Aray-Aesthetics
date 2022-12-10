/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SliderLinks() {
  const router = useRouter();
  const progressBarEl = useRef(null);
  const order = ['/', '/about', '/services', '/gallery', '/contact'];

  useEffect(() => {
    const thumbWidth = 100 / order.length;
    progressBarEl.current.style.marginLeft = `${(order.indexOf(router.pathname)) * (thumbWidth + thumbWidth * 0.1)}%`;
  }, [router.pathname]);

  return (
    <>
      <div className="mobile-nav-wrap"></div>
      <div className="direct-links">
        <a href="tel:(941)914-1541">
          <i className="fa-solid fa-phone" />
        </a>
        <a href="mailto:araysyzdykova@yahoo.com">
          <i className="fa-solid fa-envelope" />
        </a>
        <a href="https://www.instagram.com/aray_aesthetics_llc/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram" />
        </a>
      </div>
      <div className="page-progress-wrap">
        {/* Website progress bar */}
        <div className="progressBar-wrap">
          <div className="progressBar" ref={progressBarEl} />
        </div>

        {/* Website progress indicators */}
        <div className="page-progress-indicators">
          <Link href="/">
            <i className="fa-solid fa-house" />
          </Link>
          <Link href="/about">2</Link>
          <Link href="/services">3</Link>
          <Link href="/gallery">4</Link>
          <Link href="/contact">5</Link>
        </div>
      </div>
      <p className="fixed-address-bar">
            <a
              href="https://www.google.com/maps/place/Aray+Aesthetics+LLC/@27.3382035,-82.5447385,17z/data=!3m2!4b1!5s0x88c34012997bac11:0xcbdde6b609505471!4m5!3m4!1s0x88c3413f6acc1f9f:0xafb624f699265217!8m2!3d27.3381988!4d-82.5425445"
              target="_blank"
              rel="noreferrer"
            >
              200 Central Ave, Sarasota, FL 34236
            </a>
      </p>
    </>
  );
};
