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
      <main className='main'>
        <Home />
        <About />
        <Portfolio/>
        <Qualification/>
        <Skills />
        <Services />
        <Contactme/>
      </main>
    </div>
  );
}

export default App;
