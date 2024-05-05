import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx";
import Sidenav from "./Components/Sidenav.jsx";
import Classes from "./Components/Classes.jsx";
import Contact from "./Components/Contact.jsx";
import Trial from "./Components/Trial.jsx";
import SectionDivide from "./Components/SectionDivide.jsx";
import "./App.css";

function App() {
  return(
      <>
      <Navbar />
      <Sidenav />
      <Home />
      <SectionDivide />
      <About />
      <SectionDivide />
      <Classes />
      <SectionDivide />
      <Trial />
      <SectionDivide />
      <Contact />
      </>
      )
}

export default App
