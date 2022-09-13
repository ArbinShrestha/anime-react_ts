import axios from 'axios';
const API_URL = 'http://localhost:8080/api/auth/'

type loginProps = {
    username: string,
    password: string,
}

type registerProps = {
    username: string,
    password: string,
    email: string,
}

const AuthService = () =>{
    const login = async ({username, password}: loginProps) => {
        return axios
            .post(API_URL + "signin",{
                username,
                password
            })
            .then(res => {
                if(res.data.accessToken){
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
                return res.data
            })
    }

    const logout = () => {
        localStorage.removeItem("user");
    }

    const register = ({username, password, email}: registerProps) => {
        return axios 
            .post(API_URL + "signup",{
                username,
                email,
                password
            })
    }

    const getCurrentUser = () => {
        const userStr = localStorage.getItem("user");
        if(userStr) return JSON.parse(userStr);
        return null
    }

}

export default AuthService