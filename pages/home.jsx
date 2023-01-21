import React, { useEffect, useContext } from 'react';
import AnimatedLayout from '../subcomponents/AnimatedLayout.jsx';
import NextPageLink from '../subcomponents/NextPageLink.jsx';
import { ThemeContext } from '../pages/_app.js';

export default function Landing() {
  const { theme } = useContext(ThemeContext);

  // ComponentDidMount
  useEffect(() => {
    const letterEls = document.querySelectorAll('.letter');
    let iterationCount = 0;
    const letterInterval = setInterval(() => {
      if (iterationCount >= 3) {
        iterationCount = 0;
      } else {
        const randomIndex = Math.floor(Math.random() * letterEls.length);
        letterEls[randomIndex].classList.add('enlarging');
        setTimeout(() => {
          letterEls[randomIndex].classList.remove('enlarging');
        }, 500);
      }
    }, 3000);

    return function cleanup() {
      clearInterval(letterInterval);
    };
  }, []);

  return (
    <AnimatedLayout props={{ className: "landing-wrap", id:"landing" }}>
      <div className="landing-intro-wrap">
        <div className="landing-intro-body">
          <h2>
            <div className="line">
              {
              'Welcome to Aray Aesthetics!'.split(' ').map((word, i) => (
                <div className="word" key={i}>
                  {[...word].map((letter, j) => (
                    <span key={j} className="letter">{letter}</span>
                  ))}
                  {'\u00A0'}
                </div>
              ))
            }
            </div>
            <div className="line">
              {
              'Explore our services, and let us help you discover the beauty within!'.split(' ').map((word, i) => (
                <div className="word" key={i}>
                  {[...word].map((letter, j) => (
                    <span key={j} className="letter">{letter}</span>
                  ))}
                  {'\u00A0'}
                </div>
              ))
            }
            </div>
          </h2>
          <ul>
            <li><span>facial services</span></li>
            <li><span>lip shading</span></li>
            <li><span>waxing</span></li>
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
        <div className={`photo-wrap ${theme}-landing`} draggable={false}>
          <img src={`./assets/images/${theme}Landing.png`} alt="" />
        </div>
      </div>
      <NextPageLink props={{ href: '/about' }} />
    </AnimatedLayout>
  );
};
