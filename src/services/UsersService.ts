import axios from "axios"

export class UsersService{
    private static URL:string = "https://jsonplaceholder.typicode.com"

    public static getAllUsers() {

        let UserURL:string = `${this.URL}/users`
        return axios.get(UserURL)
        
    }

    public static getSingleUser(userID:string)
    {
        let UserURL:string =`${this.URL}/users/${userID}`
        return axios.get(UserURL)
    }
}

export default UsersService;
