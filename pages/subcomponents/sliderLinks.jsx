/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import ScrollProgressBar from './mini/ScrollProgressBar.jsx';

export default function SliderLinks() {
  return (
    <>
      <div className="mobile-nav-wrap"></div>
      <div className="direct-links">
        <i className="fa-solid fa-phone" />
        <i className="fa-solid fa-envelope" />
        <i className="fa-brands fa-instagram" />
      </div>
      <div className="page-progress-wrap">
        <ScrollProgressBar />
        <div className="page-progress-indicators">
          <a href="#">
            <i className="fa-solid fa-house" />
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
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
