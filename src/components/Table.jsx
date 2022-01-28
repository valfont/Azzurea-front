import React from "react";
import detailsIcon from "../assets/svg/detailsIcon.svg"

const Table=()=>{
return(
    <div className="table--container">
        <div className="details">
            <ul className="details--list">
                <li className="details--list--li">Tout</li>
                <li className="details--list--li">Nouvelle</li>
                <li className="details--list--li">Validée</li>
                <li className="details--list--li">Annulée</li>
            </ul>       
            <button className="button--ajouter">Ajouter</button>
        </div>
        <div>
        <table className="details--table">
                <thead>
                    <tr>
                    <th >Nom</th>
                    <th>Date de réservation</th>
                    <th>Jour du transport</th>
                    <th>N° de vol</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>with two columns</b></td>
                        <td>with two columns</td>
                        <td>with two columns</td>
                        <td><a href="a">with two columns</a></td>
                        <td><img src={detailsIcon} alt="logo details"></img></td>
                    </tr>
                    <tr>
                        <td><b>with two columns</b></td>
                        <td>with two columns</td>
                        <td>with two columns</td>
                        <td><a href="a">with two columns</a></td>
                        <td><img src={detailsIcon} alt="logo details"></img></td>
                    </tr>
                </tbody>
            </table>
        </div>
 
    </div>
)
}

export default Table