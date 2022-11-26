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
    </>
  );
};
