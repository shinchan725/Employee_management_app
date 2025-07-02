import { IUser } from "../models/IUserList";

export class userService {
    private static users: IUser[] = [
        {sno:1,name:'bitch',age:25},
        {sno:2,name:'bitch2',age:22},
        {sno:3,name:'bitch3',age:20},
        {sno:4,name:'bitch4',age:21},
    ]

    public static getAllUsers(){
        return this.users
    }
}

export default userService









