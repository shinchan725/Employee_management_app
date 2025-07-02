import React,{useState} from "react";

interface IState{
    isLogin:boolean
}

const AuthUser :React .FC =() =>{
    const [state,setState] = useState<IState>(
        {
            isLogin:false,
        }
    );

    const handleLogin =( ) : void =>   {
        setState({isLogin : true});
    };

    const handleLogout =( ) : void =>   {
        setState({isLogin : false});
    };


    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {state.isLogin && state.isLogin ?
                         (<h1>Welcome user</h1>
                        ) : (
                            <h1>please login for dashbasrd</h1>
                         )}

                         {state.isLogin && state.isLogin ?
                         ( <button className=" btn btn-danger m-2"
                          onClick={handleLogout}>logout</button>
                        ) : (
                            <button className=" btn btn-primary m-2"
                             onClick={handleLogin}>login</button>
                         )}

                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthUser;

















