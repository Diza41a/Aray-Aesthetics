import './styles/layout.css';
import './styles/themes.css';

// Component imports
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';
import SliderLinks from './components/SliderLinks.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <SliderLinks />
    </div>
  );
}

export default App;
