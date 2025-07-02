import React from "react";

interface IPROPS{

    userid:number
    username:String
}

export default class Users extends React.Component<IPROPS>{
    // eslint disable next line
    constructor(props:IPROPS){
        super(props)
    }

    render(){
        let{userid,username} = this.props
        //destructuring of propertie can also be used by abstracting
        return(
            <>
            <h1>welcome to class component</h1>
            <h4>UserId: {userid}</h4>
            <h4>username :{username}</h4>

            {/*if destructuring of properties is not used than 
             "" this.props.___ " is used as it is class component */}
        </>
        );
    }
}
















