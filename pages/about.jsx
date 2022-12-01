import React from 'react';

export default function AboutMe() {
  return (
    <>
      <h2 className="section-title" id="about-me">About Me</h2>
      <div className="about-me-wrap">
        <div className="about-me-description">
          <h4 className="title">I'm a blueberry croissant!</h4>
          <p className="bio">
            A brief bio.  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis...
          </p>
        </div>
        <div className="about-me-pics">
          <img src="./assets/images/mock.jpg" alt="" />
          <img src="./assets/images/mock2.jpg" alt="" />
        </div>
      </div>
    </>
  );
}