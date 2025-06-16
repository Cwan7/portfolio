import {useState} from 'react';
import './Footer.css'

const Footer = () => {
    const [showEmail, setShowEmail] = useState(false);
    const [showPhone, setShowPhone] = useState(false);

    const handleEmailClick = (e) => {
        e.preventDefault();
        setShowEmail(!showEmail)
    }
    const handlePhoneClick = (e) => {
        e.preventDefault();
        setShowPhone(!showPhone)
    }
    return (
        <footer className='footer'>
            <div className='footer-logos'> 
                <a className="devicon-icon" 
                href="https://github.com/Cwan7" 
                target="_blank" 
                rel="noopener noreferrer">
                <i class="devicon-github-original"></i>
                </a>
                <a className="devicon-icon" 
                href="https://www.linkedin.com/in/conor-wantuch-27708b112/" 
                target="_blank" 
                rel="noopener noreferrer">
                <i class="devicon-linkedin-plain"></i>
                </a>
                <div className="contact-item">
               <span className="material-symbols-outlined" onClick={handleEmailClick} title="Gmail">
                 mail
               </span>
               {showEmail && (
                 <a href="mailto:Cwantuch7@gmail.com" className="contact-text">
                   Cwantuch7@gmail.com
                 </a>
               )}
             </div>
              <div className="contact-item">
               <span className="material-symbols-outlined" onClick={handlePhoneClick} title="Phone">
                 phone
               </span>
               {showPhone && (
                 <a href="tel:+17326723541" className="contact-text">
                   (732) - 672 - 3541
                 </a>
               )}
               </div>
            </div>
        </footer>
    )
};

export default Footer;