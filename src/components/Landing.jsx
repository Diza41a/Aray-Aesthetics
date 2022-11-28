import React from 'react';

export default function Landing() {
  return (
    <div className="landing-wrap" id="landing">
      <div className="landing-intro-wrap">
        <div className="landing-intro-body">
          <h2>Lorem Ipsum! <br /> Eat a blueberry croissant and check out the next page!</h2>
          <ul>
            <li><span>service I offer</span></li>
            <li><span>another one</span></li>
            <li><span>third one</span></li>
            <li><span>...and more</span></li>
          </ul>
          <p className="address-bar">4893 Random Dr, Sarasota, FL 34236</p>
        </div>
        {/* person image */}
      </div>
      {/* down arrow */}
      <button id="leave-landing-button">
        <i className="fa-solid fa-chevron-down" />
      </button>
    </div>
  );
};
