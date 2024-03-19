import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
// import Qualification from './Components/Quialification/Qualification';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contactme from './Components/Contactme/Contactme';
import { LanguageProvider } from './Contexts/languageContext';
function App() {
  return (
    <LanguageProvider>
    <div>
      <NavBar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Portfolio/>
        {/* <Qualification/> */}
        <Skills />
        <Contactme/>
      </main>
    </div>
    </LanguageProvider>
  );
}

export default App;
