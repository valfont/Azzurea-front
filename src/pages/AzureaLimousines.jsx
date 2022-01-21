import React from "react"
import background from "../assets/svg/background.svg"
import photoAvatar from "../assets/svg/photoAvatar.svg"
import Grid from "../components/Grid"
import "../style/azureaLimousines.css"

const AzureaLimousines =()=>{
    let sectionStyle  = {
        width: "100vw",
        height: "105vh",
        backgroundSize: "cover",
        backgroundImage:  `url(${background})`,
        opacity: 0.08,
      };
return(
    <div>    
        
      
        
 
         
            <section style={ sectionStyle }>    
      </section>  
      <section className="on">
                   <img className="avatar" src={photoAvatar} alt="logo" />
                <article>  
                    <h2 className="title-article" >azurea limousines </h2>
                    <p>Azuréa Limousine vous accompagne dans tous vos déplacements d’affaires ou d’ordre privé en vous proposant un service personnalisé haut de gamme de location de voiture avec nos chauffeurs vtc sur la Côte d’Azur. Azuréa Limousine met à votre disposition un service de location de voitures luxueuses, de la berline au mini van, avec des chauffeurs privés bilingues. Notre prestation de location limousine avec chauffeur particulier offre à notre clientèle exigeante un service haut de gamme conjuguant liberté et rapidité de déplacement, élégance et efficacité. </p>
                </article>
    
            <h3 className="titleH3">Nos Flottes</h3>
           <Grid/> 
           </section>
    </div>
)

}

export default AzureaLimousines