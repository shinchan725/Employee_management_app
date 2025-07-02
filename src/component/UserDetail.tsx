import React ,{useState,useEffect}from "react"
import {Link, useParams} from 'react-router-dom';
import { IUsers } from "../models/IUsers";
import UsersService from "../services/UsersService";

interface IParams{
    id:string 
}

interface IState{
    loading:boolean,
    users:IUsers,
    errorMsg:string
}


const UserDetails:React.FC =() => {

    const {id} = useParams<IParams | any>();

    const [state,setState] = useState<IState>({
        loading:false,
        users:{} as IUsers,
        errorMsg:"",
    });

    useEffect(() => {
        if(id){
            setState(prevState => ({...state,loading:true}))
            UsersService.getSingleUser(id)
            .then(res => setState
                ({
                    ...state,
                    loading:false, 
                    users:res.data
                }))
            .catch(error => setState
                ({
                    ...state,
                    loading:false,
                    errorMsg:error.message
                }))
        }

    }, [id])


    const {loading,users,errorMsg} = state


    return(
        <>
            <div className="container">
                <h1>Single user details page</h1>
                
                
                <div className="row">
                    {loading && <h1>Loading...</h1>}
                    {errorMsg && <h1>{errorMsg}</h1>}

                    {
                        Object.keys(users).length > 0 && (
                            <div className="row">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Name: <b>{users.name}</b>
                                    </li>
                                    <li className="list-group-item">
                                    username: <b>{users.username}</b>
                                    </li>
                                    
                                    <li className="list-group-item">
                                    email: <b>{users.email}</b>
                                    </li>
                                    <li className="list-group-item">
                                    phone: <b>{users.phone}</b>
                                    </li>
                                    <li className="list-group-item">
                                    website: <b>{users.website}</b>
                                    </li>
                                    {/* <li className="list-group-item">
                                    website <b>{users.address}</b>
                                    </li>
                                    <li className="list-group-item">
                                    website <b>{users.company}</b>
                                    </li> */}
                                    
                                </ul>
                            </div>
                        )
                    }
                </div>

                <div className="mt-4">
                    <Link to={'/'} className="btn btn-info">
                        GO BACK
                    </Link>
                </div>

            </div>
        </>
    )

}

export default UserDetails;



