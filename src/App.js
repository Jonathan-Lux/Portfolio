import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/navBar";
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect} from"react";
import About from "./components/about/about";

function App() {
useEffect(() =>{
  AOS.init();
  AOS.refresh()
},[])

  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
