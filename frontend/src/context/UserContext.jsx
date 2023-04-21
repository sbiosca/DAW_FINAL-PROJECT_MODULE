import React, { useEffect, useState } from "react";
import { JWTGetToken, JWTRemoveToken } from "../services/JWTService";
import { useNavigate } from "react-router-dom"
import jwt_decode from "jwt-decode"
import UserService from "../services/UserService";
const Context = React.createContext({})
export function UserContextProvider({ children }) {
    const [users, setUser] = useState(null)
    const [ Admin, setIsAdmin ] = useState(false);

    useEffect(() => {
        isAdmin()
        checkUser()
        console.log(users)
    }, [])
    const checkUser = async () => {
        if (JWTGetToken()) {
            const id = jwt_decode(JWTGetToken())
            const res = await UserService.getProfile(id.id)
            console.log(res)
            if (res) {
                setUser(res.data)
            }
        } else {
            setUser(null)
            JWTRemoveToken()
        }
    }
    const isAdmin = async () => {
        if (JWTGetToken()) {
            const id = jwt_decode(JWTGetToken())
            const res = await UserService.isAdmin(id.id)
            if (res) {
                setIsAdmin(true)
            }
        }else {
            JWTRemoveToken()
            setUser(null)
            setIsAdmin(false)
        }
    }
    const [jwt, setJWT] = useState(() => checkUser())
    return (
        <Context.Provider value={{ jwt, setJWT, users, setUser, setIsAdmin, checkUser, isAdmin, Admin }}>{children}</Context.Provider>
    );
}
export default Context