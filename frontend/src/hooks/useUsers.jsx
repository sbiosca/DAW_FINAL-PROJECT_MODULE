import { useEffect, useCallback, useState, useContext } from "react";
import UserService from "../services/UserService";
import JWTService from "../services/JWTService"
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { toast } from 'react-toastify';
import jwt_decode from "jwt-decode"

export function useUser() {
    const navigate = useNavigate()
    const { users, setUser, jwt, setJWT, setIsAdmin, checkUser } = useContext(UserContext);
    const login = useCallback((data) => {
        UserService.usersLogin(data)
        .then(({data}) => {
            console.log(data)
            setUser(data)
            // checkNotificationContext(data.id)
            JWTService.JWTPutToken(data.token)
            JWTService.JWTPutTokenRef(data.ref_token)
            toast.success('LOGIN', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
            navigate("/")
        }).catch((error) => {
            console.log(error)
            setUser(null)
            toast.error('Username or password not correct!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
        })
    }, [setJWT])

    const register = useCallback((data) => {
        console.log(data)
        UserService.usersRegister(data)
        .then(({data}) => {
            console.log(data)
            setUser(data)
            // checkNotificationContext(data.id)
            JWTService.JWTPutToken(data.token)
            JWTService.JWTPutTokenRef(data.ref_token)
            toast.success('REGISTER', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
            navigate("/")
        }).catch((error) => {
            console.log(error)
            setUser(null)
            toast.error('Username or email are exist correct!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
        })
    }, [setJWT])

    const userlogout = useCallback(() => {
        toast.info('LogOut!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        })
        navigate("/")
        setUser(null)
        JWTService.JWTRemoveTokenRef()
        JWTService.JWTRemoveToken()
    }, [])

    const checkToken = () => {
        if (jwt_decode(JWTService.JWTGetToken()).exp * 1000 >  Date.now()) {
            console.log("OK TOKEN1")
        }else if (jwt_decode(JWTService.JWTGetTokenRef()).exp * 1000 >  Date.now()) {
            console.log("OK TOKEN2")
        }else {
            userlogout()
        }
    }

    return {
         login, user: users, register, checkToken, userlogout
    }
}