import Contact from "./components/contact/Contact"
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/navBar";
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect} from"react";
import About from "./components/about/about";
import Projects from "./components/Projects/Projects";

function App() {
useEffect(() =>{
  AOS.init();
  AOS.refresh()
},[])

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
