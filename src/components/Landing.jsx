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
          <p className="address-bar">
            <a
              href="https://www.google.com/maps/place/Aray+Aesthetics+LLC/@27.3382035,-82.5447385,17z/data=!3m2!4b1!5s0x88c34012997bac11:0xcbdde6b609505471!4m5!3m4!1s0x88c3413f6acc1f9f:0xafb624f699265217!8m2!3d27.3381988!4d-82.5425445"
              target="_blank"
              rel="noreferrer"
            >
              200 Central Ave, Sarasota, FL 34236
            </a>
          </p>
        </div>
        {/* Aray image */}
        <div className="photo-wrap">
          <img src="./assets/images/mockLanding.png" alt="" />
        </div>
      </div>
      {/* down arrow */}
      <button id="leave-landing-button">
        <i className="fa-solid fa-chevron-down" />
      </button>
    </div>
  );
};
