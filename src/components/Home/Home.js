import "./home.css";
import eu from"../../assets/eu.png"
import {FaReact} from"react-icons/fa"
import {GrNode} from"react-icons/gr"
import {DiJavascript} from"react-icons/di"
import {useState, useEffect} from"react"
import axios from "axios"

export default  function Home(){
const [projects, setProjects] = useState([])

    useEffect(() =>{
     axios.get("https://api.github.com/users/jonathan-lux/repos").then(res =>{setProjects(res.data)})
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[projects])

    return(
       <div className="home" id="home">
           <div className="home_container">
               <div className="home_left" data-aos="fade-right" data-aos-delay="500">
                   <p className="home_left_subtitle"> Front_end Back_end</p>
                    <div className="home_left_title">
                        <p>Primeiro entendemos,</p>
                        <p>Depois codamos</p>
                    </div>        
               </div>
               <div className="home_left_info">
                   <p>Um júnior buscando oportunidade para entrar no mercado</p>
                   <p>e buscar a sua sonhada vaga</p>
               <a href="#contact" className="home_left_a">Contate-me</a>
               </div>
           </div>
           <div className="home_right" data-aos="fade-left" data-aos-delay="1000">
               <img src={eu} alt="minha foto" className="home_right_eu" />
               <div className="home_right_circle home_right_react">
                   <FaReact size="60px"/>
               </div>
               <div className="home_right_circle home_right_node">
                   <GrNode size="60px"/>
               </div>
               <div className="home_right_circle home_right_js">
                    <DiJavascript size="60px"/>
               </div>
           </div>
           <div className="home_miniInfo" data-aos="fade-up" data-aos-delay="1000">
               <p className="info_number">Estudando</p>
               <p className="info_desc">buscando o melhor para evoluir</p>
               <p className="info_number">{projects.length}</p>
               <p className="info_desc">Repositórios no github</p>
           </div>
       </div>
    )
}
