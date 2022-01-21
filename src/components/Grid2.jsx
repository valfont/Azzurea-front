import React from "react";
import plane from "../assets/svg/plane.svg";

const Grid =()=>{
    return(
        <div className="grid2">
            <div>
                <div className="card">
                    <img src={plane}/> 
                    <h4 className="title-white">Transfert aéroport</h4>
                <p className="justify" >A partir de ou à destination de l’aéroport ou de la gare, depuis ou vers la région de St-Tropez, nos chauffeurs tous bilingues et expérimentés vous attendent, vous accueillent, vous aident à transporter vos bagages.</p>
                </div>
               
            </div>
            <div>
                <div className="card">
                    <img src={plane}/>    
                    <h4 className="title-white" >Mise à disposition</h4>
                <p className="justify" >A partir de ou à destination de l’aéroport ou de la gare, depuis ou vers la région de St-Tropez, nos chauffeurs tous bilingues et expérimentés vous attendent, vous accueillent, vous aident à transporter vos bagages.</p>
                </div>
            
            </div>
            <div>
                <div className="card">
                    <img src={plane}/>  
                    <h4 className="title-white">Transfert aéroport</h4>
                <p className="justify" >A partir de ou à destination de l’aéroport ou de la gare, depuis ou vers la région de St-Tropez, nos chauffeurs tous bilingues et expérimentés vous attendent, vous accueillent, vous aident à transporter vos bagages.</p>
                </div>
              
            </div>
        </div>
    )
}

export default Grid