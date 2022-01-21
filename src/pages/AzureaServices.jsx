import React from "react"
import background2 from "../assets/svg/background2.svg"
import Grid2 from "../components/Grid2"
import "../style/azureaServices.css"


const AzureaServices =()=>{
    let sectionStyle  = {
        width: "100vw",
        height: "65vh",
        opacitity : 0.08,
        backgroundSize: "cover",
        backgroundImage:  `url(${background2})`
      };
return(
    <div>    

      
      <div className="background3">
                    <section style={ sectionStyle }>          
                    <h3 className="titleH3a" >azurea service </h3>
          <Grid2/>
       
                    </section>
                </div>  
    
       
    </div>
)

}

export default AzureaServices