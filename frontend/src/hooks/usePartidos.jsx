import { useEffect, useCallback, useState } from "react";
import PartidosService from "../services/PartidosService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function usePartidos() {
    const navigate = useNavigate();
    const [partidos, setPartidos] = useState();
    const [partidosbyCompeti, setPartidosByCompeti] = useState();
    useEffect(function () {
        PartidosService.getAllPartidos()
        .then(({data}) => {
            setPartidos(data)
        })
    }, [setPartidos])

    const GetPartidosbyCompeti = (id) => {
        PartidosService.GetPartidosbyCompeti(id)
        .then(({data}) => {
            setPartidosByCompeti(data)
        })
    }

    const CreatePartidos = useCallback((data) => {
        PartidosService.addPartidos(data)
        .then(({data}) => {
            console.log(data)
        })
    }, [])

    const deletePartidos = useCallback((id) => {
        PartidosService.deletePartidos(id)
        .then(({data}) => {
            toast.warn('🚲 Deleted Partidos!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            navigate('/dashboard')
        })
    }, [])

    return {
        partidos: partidos, partidosbyCompeti, GetPartidosbyCompeti, CreatePartidos, deletePartidos
    }
}