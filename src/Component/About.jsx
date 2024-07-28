//About.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import laptopimg from '../Images/About.png'
import '../Css/HomeAbout.css'
import Same from './Same'

const About = () => {
    return ( 
        <Same 
        title="About TechCrunch - delivering amazing Moments of Service "
        text ="At TechCrunch, we deliver award-winning solutions for companies who want to be their best when it matters most to their customers - at their Moment of Service.
        "
        imgsrc={laptopimg}
        btn="Know more"
        />
     );
}
 
export default About;