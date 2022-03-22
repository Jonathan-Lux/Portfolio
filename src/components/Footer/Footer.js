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
                <TiSocialLinkedinCircular size='40px'/>
                <TiSocialGithubCircular size='40px'/>
               <HiOutlineMail size='40px'/>
            </div>
        </div>
    )
}