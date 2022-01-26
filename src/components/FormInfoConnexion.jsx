import React from "react"

const FormInfoConnexion=()=>{
    return(
        <form className="form--connexion">
         <div>

                <form className="form--login--connexion">  
                <h3 className="titre--connexion">Informations de la connexion</h3>
                    <p>Email</p>
                    <input type="text" id="mail"/>
                    <div className="row">
                    <button className="submit--annuler" type="submit" >Annuler</button>
                    <button className="submit--modifier" type="submit" >Modifier</button>
                    </div>
                    <p>Confirmer mot de passe</p>
                    <input type="password" id="password" />
                    <p>Confirmer mot de passe</p>
                    <input type="password" id="password" />
                    <div className="row">
                    <button className="submit--annuler" type="submit" >Annuler</button>
                    <button className="submit--modifier" type="submit" >Modifier</button>
                    </div>
                </form>
        </div>
    </form>
    )
}

export default FormInfoConnexion