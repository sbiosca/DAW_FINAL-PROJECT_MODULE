import React, { useContext, useState } from "react";
import HeaderComponent from "../components/header/HeaderComponent"
import {useCompeticion} from "../hooks/useCompeticiones"
import {useUser} from "../hooks/useUsers";
import UserContext from "../context/UserContext"
import { useNavigate, useLocation } from "react-router-dom";

import { JWTGetToken } from "../services/JWTService";

const HeaderPage = () => {
    const {competicion} = useCompeticion()
    const [token_logout, setLog] = useState();
    const token = JWTGetToken()
    const { users, Admin } = useContext(UserContext);
    const {userlogout, checkToken} = useUser();
    setTimeout(() => {
        checkToken()
    }, 500);
    const navigate = useNavigate();
    const isLogin = () => {
        setLog(false)
        navigate('/login')
    }
    const isLogout = () => {
        setLog(true)
        userlogout()
    }
    let location = useLocation();
    return (
        <div>
            {
                location.pathname.includes("dashboard") ?
                <div></div>:
                <HeaderComponent competicion={competicion} isToken={token} isLogout={isLogout} token_logout={token_logout} 
                    isLogin={isLogin} userData={users} isAdmin={Admin}/> 
            }
        </div>
    )

}

export default HeaderPage