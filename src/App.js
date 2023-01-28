import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Qualification from './Components/Quialification/Qualification';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contactme from './Components/Contactme/Contactme';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Home />
        <About />
        <Skills />
        <Qualification/>
        <Services />
        <Portfolio/>
        <Contactme/>
      </main>
    </div>
  );
}

export default App;
