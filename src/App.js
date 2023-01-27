import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Qualification from './Components/Quialification/Qualification';
import Services from './Components/Services/Services';

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
      </main>
    </div>
  );
}

export default App;
