import "./about.css";
import {CgDesignmodo} from"react-icons/cg"
import{BsCodeSlash} from"react-icons/bs"
import {BiTargetLock} from"react-icons/bi"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about_left">
        <div className="about_cards" data-aos="fade-right" data-aos-delay="1000">
            <div className="about_card">
          <div className="card_top">
            <p className="card_title">Front-End</p>
           <CgDesignmodo size="80px"/>
          </div>
          <p className="card_desc">projetos em react</p>
          <p className="card_link">10 Projetos</p>
        </div>
        <div className="about_card" data-aos="fade-right" data-aos-delay="1000">
          <div className="card_top">
            <p className="card_title">Desafios</p>
            <BsCodeSlash size="80px"/>
          </div>
          <p className="card_desc">Desafios de cursos</p>
          <p className="card_link"> 6 desafios</p>
        </div>
        <div className="about_card" data-aos="fade-right" data-aos-delay="1000">
          <div className="card_top">
            <p className="card_title">Projetos em nodejs</p>
            <BiTargetLock size="80px"/>
            </div>
            <p className="card_desc">javascript/typescript</p>
            <p className="card_link"> 2 projetos</p>
          </div>
        </div>
      </div>
      <div className="about_right">
          <p className="about_subtitle">Introdução</p>
          <p className="about_title">Hello, eu me chamo Jonathan Lux</p>
          <p className="about_info">E estou iniciando minha carreira</p>
          < p className="about_desc">
          Estou em busca da minha primeira oportunidade na área de programador Front-End para crescer, desenvolver e aprimorar minhas habilidades no mercado da programação.
          Sou uma pessoa persistente, esforçada e disposta a aprender novas linguagens de programação. Tenho conhecimento em JS, React e NodeJs, e estou desenvolvendo e praticando alguns projetos, os quais podem ser conferidos logo abaixo.
          </p>
      </div>
    </div>
  );
}
