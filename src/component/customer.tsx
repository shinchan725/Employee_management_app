import { DEFAULT_ENCODING } from "crypto";
import React from "react";

// class component to functional components
// creating an interface  
interface IPROPS
{
    // props name should always be in small case
    name:String;
    title:String;

    //   ? --> denotes optional attribute
    age?:number;   
}

let Customer:React.FC <IPROPS>= ({name,title,age}) => {
    return(
        <div>
            <h1>Customer Component</h1>
            <h4>name : {name} </h4>
            <h4>title : {title}</h4>
            <h4>Age: {age}</h4>     
            
       </div>
    );
} 

export default Customer











