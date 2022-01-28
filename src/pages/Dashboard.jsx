import React from "react";
import Frame from "../components/Frame";
import SearchBox from "../components/SearchBox";
import Table from "../components/Table"
import "../style/dashboard.css"


const Dashboard=()=>{
    return(
        <div>
              <SearchBox/>
              <Frame/>
              <Table/>
          
        </div>
          
    )
}

export default Dashboard