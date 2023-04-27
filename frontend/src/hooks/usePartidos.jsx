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

    return {
        partidos: partidos, partidosbyCompeti, GetPartidosbyCompeti
    }
}