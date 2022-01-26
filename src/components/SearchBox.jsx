import React from "react";
import loupeIcon from "../assets/svg/loupeIcon.svg"


const SearchBox =({onChange})=>{
    return(
        <div className="searchBar">
            <img src={loupeIcon} alt="icone loupe"></img>
            <input className="search" type="search" placeholder="Entrer votre recherche..." onChange={onChange}/>
        </div>)
}

export default SearchBox