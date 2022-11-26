import './styles/layout.css';
import './styles/themes.css';

// Component imports
import Header from './components/Header.jsx';
import SliderLinks from './components/SliderLinks.jsx';
import Landing from './components/Landing.jsx';
import AboutMe from './components/AboutMe.jsx';
import Services from './components/Services.jsx';

function App() {
  return (
    <div className="App">
      <Header />

      <Landing/>
      <AboutMe />
      <Services />

      <SliderLinks />
    </div>
  );
}

export default App;
