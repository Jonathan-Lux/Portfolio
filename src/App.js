import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/navBar";
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect} from"react";

function App() {
useEffect(() =>{
  AOS.init();
  AOS.refresh()
},[])

  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
