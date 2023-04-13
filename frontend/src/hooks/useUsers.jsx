import { useEffect, useCallback, useState, useContext } from "react";
import UserService from "../services/UserService";
import JWTService from "../services/JWTService"
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import {  toast } from 'react-toastify';

export function useUser() {
    const navigate = useNavigate()
    const { users, setUser, jwt, setJWT, setIsAdmin, checkUser } = useContext(UserContext);
    const login = useCallback((data) => {
        UserService.usersLogin(data)
        .then(({data}) => {
            console.log(data)
            // setUser(data)
            // checkNotificationContext(data.id)
            // JWTService.JWTPutToken(data.token)
            // JWTService.JWTPutTokenRef(data.ref_token)
            // toast.success('LOGIN', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     theme: "dark",
            // })
            // navigate("/")
        }).catch((error) => {
            console.log(error)
            // setUser(null)
            // toast.error('Username or password not correct!', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     theme: "dark",
            // })
        })
    }, [setJWT])

    const register = useCallback((data) => {
        console.log(data)
        UserService.usersRegister(data)
        .then(({data}) => {
            console.log(data)
            // setUser(data)
            // checkNotificationContext(data.id)
            // JWTService.JWTPutToken(data.token)
            // JWTService.JWTPutTokenRef(data.ref_token)
            // toast.success('REGISTER', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     theme: "dark",
            // })
            // navigate("/")
        }).catch((error) => {
            console.log(error)
            // setUser(null)
            // toast.error('Username or email are exist correct!', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     theme: "dark",
            // })
        })
    }, [setJWT])

    return {
         login, user: users, register
    }
}