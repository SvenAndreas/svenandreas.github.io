import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
// import Qualification from './Components/Quialification/Qualification';
import Contactme from "./Components/Contactme/Contactme";
import { LanguageProvider } from "./Contexts/languageContext";
import PricingTable from "./Sections/PricingTable/PricingTable";
import MovingServices from "./Sections/Services/MovingServices/MovingServices";
import AboutUs from "./Sections/AboutUs/AboutUs";
import Footer from "./Sections/Footer/Footer";
import AboutServices from "./Sections/AboutUs/AboutServices/AboutServices";
function App() {
  return (
    <LanguageProvider>
      <NavBar />
      <main className="main">
        <Home />
        <AboutServices />
        <MovingServices />
        {/* <AboutUs /> */}
        <PricingTable />
        <Contactme />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
