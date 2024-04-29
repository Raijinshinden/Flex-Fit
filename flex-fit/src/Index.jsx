import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx";
import "./App.css";
import Sidenav from "./Components/Sidenav.jsx";

function App() {
  return(
      <>
      <Navbar />
      <Sidenav />
      <Home />
      <About />
      </>
      )
}

export default App
