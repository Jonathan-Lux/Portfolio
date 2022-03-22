import {useState,useEffect} from "react"
import bars from "../../assets/bars.svg"
import close from "../../assets/close.svg"
import "./navBar.css";
import { TiSocialLinkedinCircular,TiSocialGithubCircular } from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth,setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const changeWith = ()=>{
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize",changeWith)
    return ()=>{
      window.removeEventListener("resize",changeWith)
    }
  },[])

  return (
    <div className="navBar">
      <nav>
        <div className="logo">
          <span className="logoSpan">Jonathan</span>Lux
        </div>
        {(toggleMenu || screenWidth > 1024) && (
          <ul className="list">
            <li className="links">
              <a href="#about">About</a>
            </li>
            <li className="links">
              <a href="#projects">Projects</a>
            </li>
            <li className="links">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
        <div className="menu">
          {toggleMenu ?  (
            <img
              src={close}
              className="menuIcons"
              onClick={() => setToggleMenu(0)}
              alt="close"/>
          ) : (
            <img
              className="menuIcons"
              src={bars}
              onClick={() => setToggleMenu(1)}
              alt="open sidebar"/>
          )}
        </div>
        <div className="navBar_social">
          <div className="navBar_linkedinDiv">
           
            <TiSocialLinkedinCircular size="40px"/>
            <a href="https://www.linkedin.com/in/jonathan-lux-840162161/" target="_blank" rel="noopener noreferrer"  > Linkedin</a>
            
          </div>
          <div className="navBar_githubDiv">
            <TiSocialGithubCircular size="40px"/>
            <a href="https://github.com/Jonathan-Lux" target="_blank" rel="noopener noreferrer" >Github</a>
          </div>
          <a href="#contact" className="navBar_email">
            <HiOutlineMail size="40px"/>
          </a>

        </div>
      </nav>
    </div>
  );
}
