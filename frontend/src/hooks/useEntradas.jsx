import { useEffect, useCallback, useState } from "react";
import EntradasService from "../services/EntradasService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function useEntradas() {
    const navigate = useNavigate();
    const [entradas, setEntradas] = useState();
    useEffect(function () {
        EntradasService.getEntradas()
        .then(({data}) => {
            setEntradas(data)
        })
    }, [setEntradas])

    return {
        entradas: entradas
    }
}