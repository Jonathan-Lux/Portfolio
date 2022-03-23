import "./projects.css"
import jlMoney from "../../assets/jlMoney.png"
import igNews from "../../assets/igNews.png"
import todoList from "../../assets/todoList.png"

export default function Projects(){
    return(
        <div className="projects" id="projects">
            <div className="projects_container">
                <div className="projects_left">
                    <p className="projects_left_title">Alguns dos meus projetos</p>
                    <img src={jlMoney} alt="" className="projects_img"/>
                    <button className="projects_left_btn">Todos projetos </button>
                    <p className="projects_left_extra">Gostou do projeto?
                    <a href="#contact">Contact</a></p>
                    </div>
                    <div className="projects_right">
                        <img src={igNews} alt="" className="projects_img"/>
                        <img src={todoList} alt="" className="projects_img"/>
                </div>
            </div>
        </div>
    )
}