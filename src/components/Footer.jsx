import React from "react";
import car1 from "../assets/svg/car1.svg";
import car2 from "../assets/svg/car2.svg";
import car3 from "../assets/svg/car3.svg";

const Footer =()=>{
    return(
        <div className="footer">
            <div>
                <div className="card">
                    <img src={car1}/> 
                    <h4>BERLINES</h4>
                <p>Classe E (ou similaire)</p>
                </div>
               
            </div>
            <div>
                <div className="card">
                    <img src={car2}/>    
                    <h4>Limousines</h4>
                <p>Classe S (ou similaire)</p>
                </div>
            
            </div>
            <div>
                <div className="card">
                    <img src={car3}/>  
                    <h4>Van</h4>
                <p>Classe V (ou similaire)</p>
                </div>
              
            </div>
        </div>
    )
}

export default Footer