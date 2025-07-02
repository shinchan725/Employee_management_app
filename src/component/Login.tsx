import React , {useState} from "react";
import { ILogin } from "../models/ILogin";

interface IState{
    // user:{
    //     email:string,
    //     password:string
    // }
    user:ILogin
}

const Login : React.FC = () => {
    const [state,setState] = useState<IState>({
        user:{
            email:'',
            password:''
        }
    });

    const handleChange =(event:React.
        ChangeEvent<HTMLInputElement>) :void =>{

            setState({
                user:{
                    ...state.user,
                    [event.target.name]: event.target.value,
                }
            })
    }

    const handleSubmit =(event:React.
        FormEvent<HTMLFormElement>) : void =>{
            event.preventDefault();
            console.log(state.user)
            alert('success')

    }


    return(
        <>
        <div className="container">
            <h1>Login Form</h1>
            <div className="w-50">
               <form className="card p-4 mt-4" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1 ">
                        Email address
                    </label>
                    <input 
                        type="email"
                        name="email"
                        value={state.user.email}
                        onChange={handleChange}
                        className="form-control"
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password" 
                        name="password"
                        value={state.user.password}
                        onChange={handleChange}
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password" />
                  </div>
                  <button
                        type="submit"
                        className="btn btn-primary mt-4">
                        Submit
                  </button>
               </form>
               <div className="mt-3">
               <p>{JSON.stringify(state.user)}</p>
               </div>
            </div>
        </div>
        </>
    );
};

export default Login
















