import { useEffect, useCallback, useState } from "react";
import EntradasService from "../services/EntradasService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function useEntradas() {
    const navigate = useNavigate();
    const [entradas, setEntradas] = useState();
    const [entradasbyPartido, setEntradasByPartido] = useState();
    useEffect(function () {
        EntradasService.getEntradas()
        .then(({data}) => {
            setEntradas(data)
        })
    }, [setEntradas])

    const GetEntradasByPartido = (id) => {
        EntradasService.GetEntradasByPartido(id)
        .then(({data}) => {
            setEntradasByPartido(data)
        })
    }

    const PutEntradas = useCallback((id, data) => {
        EntradasService.putEntradas(id, data)
        .then(({data}) => {
            console.log(data)
        })
    }, [])

    return {
        entradas: entradas, entradasbyPartido, GetEntradasByPartido, PutEntradas
    }
}