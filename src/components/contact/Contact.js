import "./contact.css";
import Footer from"../Footer/Footer"

export default function Contact(){
    return(
        <div className="contact" id="contact">
            <div className="contact_container">
                <div className="contact_left">
                    <p className="contact_left_desc">
                        Contate-me para uma entrevista
                    </p>
                    < p className="contact_left_connect">
                        Start by <span>saying hi</span> 
                    </p>
                </div>
                <div className="contact_right">
                    <p className="contact_right_title">
                        Informações
                    </p>
                    <p className="contact_right_address">Porto Alegre/ Rio grande do Sul</p>
                    <p className="contact_right_email">d.lu470@hotmail.com</p>
                    <ul className="contact_right_ul">
                        <li className="contact_right_links"><a href="#home">Home</a></li>
                        <li className="contact_right_links"><a href="#about">About</a></li>
                        <li className="contact_right_links"><a href="#projects">Projects</a></li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}