import "./projects.css"
import jlMoney from "../../assets/jlMoney.png"
import igNews from "../../assets/igNews.png"
import notes from "../../assets/notes.png"

export default function Projects(){
    return(
        <div className="projects" id="projects">
            <div className="projects_container">
                <div className="projects_left" data-aos="fade-right">
                    <p className="projects_left_title">Alguns dos meus projetos</p>
                    <img src={jlMoney} alt="" className="projects_img"/>
                    <button className="projects_left_btn"><a href="https://github.com/Jonathan-Lux" target="_blank" rel="noopener noreferrer"> Clique aqui! <br/>
                    para ver outros projetos</a> </button>
                    <p className="projects_left_extra">Gostou dos projetos?
                    <a href="#contact">Contact</a></p>
                    </div>
                    <div className="projects_right" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="500">
                        <img src={igNews} alt="" className="projects_img"/>
                        <img src={notes} alt="" className="projects_img"/>
                </div>
            </div>
        </div>
    )
}