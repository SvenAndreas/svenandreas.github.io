import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
