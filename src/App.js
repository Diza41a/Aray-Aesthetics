import './styles/layout.css';
import './styles/themes.css';

// Component imports
import Header from './components/Header.jsx';
import SliderLinks from './components/SliderLinks.jsx';
import Landing from './components/Landing.jsx';
import AboutMe from './components/AboutMe.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';

// Misc
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App main-theme">
      <AnimatedCursor />

      <Header />

      <Landing/>
      <AboutMe />
      <Services />
      <Gallery />
      <Contact />

      <SliderLinks />
    </div>
  );
}

export default App;
