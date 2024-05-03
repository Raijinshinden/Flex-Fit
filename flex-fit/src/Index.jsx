import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx";
import Sidenav from "./Components/Sidenav.jsx";
import Contact from "./Components/Contact.jsx";
import "./App.css";

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
