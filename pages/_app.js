// Styles
import './styles/layout.css';
import './styles/themes.css';

// Trans-page components:)
import Script from 'next/script';
import Header from './subcomponents/header.jsx';
import SliderLinks from './subcomponents/sliderLinks.jsx';

// Misc
import { useEffect, useState } from 'react';
import AnimatedCursor from "react-animated-cursor";

function MyApp({ Component, pageProps }) {
  const [onClient, toggleOnClient] = useState(false);

  // ComponentDidMount
  useEffect(() => {
    toggleOnClient(true);
  }, []);

  return (
    <>
      <Script src="https://kit.fontawesome.com/4d1f2bd158.js" crossorigin="anonymous" />

      <div id="root">
        <div className="App main-theme">
        {onClient ? <AnimatedCursor
         color='255, 255, 255'
          innerSize={13}
           outerSize={22}
            outerScale={3}
              clickables={['a', 'input', 'textarea', 'select', 'i', 'button']}
            /> : null}
        <Header />

        <Component {...pageProps} />

        <SliderLinks />
        </div>
      </div>
    </>
  )
}

export default MyApp
