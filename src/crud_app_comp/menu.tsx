import React from "react";

const menu :React.FC =() =>
    {
        return(
           
            <div className="container " >
                <h2 className="">
                    about the project
                </h2>
                <p>
                    it is a CRUD application (create,read,update,delete)
                    This project is made with the help of React in typescript <br />
                    React functions and properties used in it are as follows <br />
                    <ul >
                        <li>Functional components</li>
                        <li>props</li>
                        <li>state handling</li>
                        <li>event handling</li>
                        <li>API data fetching</li>
                        <li>Navigation Bar</li>
                        <li>generics</li> 
                        <li>hooks</li>
                        <li>Dynamic routing</li>
                    </ul>
                </p>
            </div>
            
        )
    }

    export default menu;


