import "./footer.css"
import { TiSocialLinkedinCircular,TiSocialGithubCircular } from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer_right">
                <p className="footer_name">
                    <span>Jonathan</span> Lux
                </p>
                <p className="footer_copyRights">
                    0 All rights reserved
                </p>
            </div>
            <div className="footer_socials">
                <a href="https://www.linkedin.com/in/jonathan-lux-840162161/">
                <TiSocialLinkedinCircular  size='40px'/>
                </a>
                <a href="https://github.com/Jonathan-Lux">
               <TiSocialGithubCircular size='40px' />
               </a>
               <a href="h">
               <HiOutlineMail size='40px'/>
               </a>

            </div>
        </div>
    )
}