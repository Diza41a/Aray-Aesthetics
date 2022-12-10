import React, { useEffect, useState } from 'react';
import Particle from '../subcomponents/particle.jsx';
import FadeLoader from 'react-spinners/FadeLoader';

// Styles
import './styles/layout.css';
import './styles/themes.css';

// Trans-page components:)
import Script from 'next/script';
import Header from '../subcomponents/header.jsx';
import SliderLinks from '../subcomponents/sliderLinks.jsx';

// Misc
import AnimatedCursor from 'react-animated-cursor';
import { useDraggable } from 'react-use-draggable-scroll';
import { AnimatePresence } from 'framer-motion';
import {v4 as uuidv4} from 'uuid';

export const ThemeContext = React.createContext('main-theme');

function MyApp({ Component, pageProps }) {
  const [onClient, toggleOnClient] = useState(false);
  const [theme, toggleTheme] = useState('main-theme');
  const particleThemes = {
    'main-theme': {
      color: '#ffffff',
      strokeColor: "#ffffff",
      glowColor: "#f096fca5",
    },
    'light-theme': {
      color: '#ffffff',
      strokeColor: "#ffffff",
      glowColor: "#000000",
    },
    'gold-theme': {
      color: 'rgb(252, 231, 193)',
      strokeColor: "#fff",
      glowColor: "rgba(255, 204, 108, 0.743)",
    }
  };
  const cursorThemes = {
    'main-theme': {
      color: '255, 255, 255',
    },
    'light-theme': {
      color: '0, 0, 0',
    },
    'gold-theme': {
      color: '255, 255, 255',
    }
  };

  // ComponentDidMount
  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme') || 'main-theme';
    if (theme !== storedTheme) {
      toggleTheme(storedTheme);
    }

    setTimeout(() => {
      toggleOnClient(true);
    }, 1500);
  }, []);

  return (
    <>
      <Script src="https://kit.fontawesome.com/4d1f2bd158.js" crossorigin="anonymous" />

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id="root" className={theme}>
          {
            onClient
            ?
            <>
              <div className="App">
              <Particle props={ particleThemes[theme] } />
                <AnimatedCursor
                  color={ cursorThemes[theme].color }
                  innerSize={13}
                  outerSize={22}
                  outerScale={3}
                  clickables={['a', 'input', 'textarea', 'select', 'i', 'button']}
                  innerStyle={{ zIndex: 10000 }}
                />

                <Header />

                <AnimatePresence mode="wait" initial={false}>
                  <Component {...pageProps} key={uuidv4()} />
                </AnimatePresence>

                <SliderLinks />

                <div className="bottom-gradient" />
              </div>
            </>
            :
            <div className="loading-wrap">
              <FadeLoader
                color={'#ffffff'}
                loading={true}
                // cssOverride={}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              <p className="loading-text">Loading...</p>
            </div>
          }
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default MyApp;
