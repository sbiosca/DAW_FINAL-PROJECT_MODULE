import React, { useEffect, useState } from "react";
import { JWTGetToken, JWTRemoveToken } from "../services/JWTService";
import { useNavigate } from "react-router-dom"
import jwt_decode from "jwt-decode"
import UserService from "../services/UserService";
const Context = React.createContext({})
export function UserContextProvider({ children }) {
    const [users, setUser] = useState(null)
    const [ Admin, setIsAdmin ] = useState(false);
    
    console.log(JWTGetToken())
    const navigate = useNavigate()
    useEffect(() => {
        console.log(users)
    }, [])
    //const [jwt, setJWT] = useState(() => checkUser())
    return (
        <Context.Provider value={{  users, setUser }}>{children}</Context.Provider>
    );
}
export default Context