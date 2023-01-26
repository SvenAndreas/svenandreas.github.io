import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Qualification from './Components/Quialification/Qualification';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Home />
        <About />
        <Skills />
        <Qualification/>
      </main>
    </div>
  );
}

export default App;
