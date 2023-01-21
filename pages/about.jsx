import React from 'react';
import AnimatedLayout from '../subcomponents/AnimatedLayout.jsx';
import NextPageLink from '../subcomponents/NextPageLink.jsx';

export default function AboutMe() {
  return (
    <>
      <h2 className="section-title" id="about-me">About Us</h2>
      <AnimatedLayout props={{className: "about-me-wrap"}}>
        <div className="about-me-description">
          <h4 className="title">Exquisitely made by hand...</h4>
          <p className="bio">
            {/* A brief bio.  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis... */}
            At Aray Aesthetics, we believe that beauty is more than skin deep.
             We are passionate about helping our clients look and feel their best,
              with timeless sophistication and effortless beauty.
                  We strive to create an environment in which you
                   can relax and be pampered. Let us help you bring out the beauty in you!
          </p>
        </div>
        <div className="about-me-pics">
          <div className="img-wrap">
            <img src="./assets/images/mock.jpg" alt="" />
          </div>
          <div className="img-wrap">
            <img src="./assets/images/mock2.jpg" alt="" />
          </div>
        </div>
        <NextPageLink props={{ href: '/services' }} />
      </AnimatedLayout>
    </>
  );
}