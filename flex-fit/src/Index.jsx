import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx";
import "./App.css";
import Sidenav from "./Components/Sidenav.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return(
      <>
      <Navbar />
      <Sidenav />
      <Home />
      <About />
      <Contact />
      </>
      )
}

export default App
