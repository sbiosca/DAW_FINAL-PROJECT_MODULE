import { useEffect, useCallback, useState } from "react";
import PartidosService from "../services/PartidosService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function usePartidos() {
    const navigate = useNavigate();
    const [partidos, setPartidos] = useState();
    useEffect(function (id) {
        PartidosService.getAllPartidos(id)
        .then(({data}) => {
            setPartidos(data)
        })
    }, [setPartidos])

    return {
        partidos: partidos
    }
}