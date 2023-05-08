import { useEffect, useCallback, useState } from "react";
import EntradasReservedService from "../services/EntradasReservedService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
//import sendEmail from '../sendEmail';

export function useEntradasReserved() {
    const navigate = useNavigate();
    const [entradasReserved, setEntradasReserved] = useState();
    const [entradasReservedUser, setEntradasReservedUser] = useState();
    useEffect(function () {
        EntradasReservedService.getEntradasReserved()
        .then(({data}) => {
            setEntradasReserved(data)
        })
    }, [setEntradasReserved])
    
    const getEntradasReservedByUser = (id) => {
        EntradasReservedService.getEntradasReservedByUser(id)
        .then(({data}) => {
            console.log(data)
            setEntradasReservedUser(data)
        })
    }

    const BuyEntradaReserved = (data) => {
        EntradasReservedService.BuyEntradaReserved(data)
        .then(({data}) => {
            // const to = 'sbiosca94@gmail.com';
            // const subject = 'Correo prueba';
            // const text = 'Correo prueba'
            // sendEmail(to, subject, text)
            toast.success('Correo enviado correctamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            navigate('/profile')
        })
    }


    return {
        entradasReserved: entradasReserved, BuyEntradaReserved, getEntradasReservedByUser, entradasReservedUser
    }
}