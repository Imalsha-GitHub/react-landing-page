//Footer.jsx

import React from "react";
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Css/FooterStyle.css'


const Footer = () => {
    return ( 
        <>
            <footer>
                <div className="container container-flex">
                    <div className="icons">
                        <XIcon className="icon" />
                        <FacebookIcon className="icon" />
                        <InstagramIcon className="icon" />
                        <LinkedInIcon className="icon" />
                    </div>

                    <div className="line">
                        <hr />
                        <hr />
                    </div>
                    
                    <div className="copyright">
                        <p>All rights reserved &copy;TechCrunch</p>
                    </div>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;