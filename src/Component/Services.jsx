//Services.jsx

import React from "react";
import '../Css/ServiceStyle.css'
import Card from "./Card";
import Data from "./Data";

const Services = () => {
    return ( 
        <>
        <h1>Our Services</h1>
        <div className="services">
            {Data.map((values)=>{
                return(
                    <Card
                        title1={values.Stitle}
                        imgSource={values.imgsrc}
                        desc1={values.desc1}
                        btnService={values.btnService}
                        />
                        
                )
            })}
        </div>     
        </>
     );
}
 
export default Services;