import { useEffect, useCallback, useState, useContext } from "react";
import IntegrantesService from "../services/IntegrantesService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import IntegrantesContext from "../context/IntegrantesContext"

export function useIntegrantes() {
    const navigate = useNavigate();
    const [integrantes, setIntegrantes] = useState();
    const {checkIntegrantesContext} = useContext(IntegrantesContext)
    useEffect(function () {
        IntegrantesService.getIntegrantes()
        .then(({data}) => {
            setIntegrantes(data)
            checkIntegrantesContext()
        })
    }, [setIntegrantes])

    const PutIntegrantes = useCallback((id, data) => {
        IntegrantesService.putIntegrantes(id, data)
        .then(({data}) => {
            console.log(data)
            checkIntegrantesContext()
        })
    }, [])

    return {
        integrantes: integrantes, PutIntegrantes
    }
}