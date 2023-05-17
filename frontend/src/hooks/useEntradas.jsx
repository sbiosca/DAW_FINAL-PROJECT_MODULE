import { useEffect, useCallback, useState, useContext } from "react";
import EntradasService from "../services/EntradasService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import EntradasContext from "../context/EntradasContext"


export function useEntradas() {
    const navigate = useNavigate();
    const [entradas, setEntradas] = useState();
    const [entradasbyPartido, setEntradasByPartido] = useState();
    const {checkEntradasContext} = useContext(EntradasContext)
    useEffect(function () {
        EntradasService.getEntradas()
        .then(({data}) => {
            setEntradas(data)
            checkEntradasContext()
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
            checkEntradasContext()
        })
    }, [])

    return {
        entradas: entradas, entradasbyPartido, GetEntradasByPartido, PutEntradas
    }
}