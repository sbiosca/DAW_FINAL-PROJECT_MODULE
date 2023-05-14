import { useEffect, useCallback, useState } from "react";
import IntegrantesService from "../services/IntegrantesService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function useIntegrantes() {
    const navigate = useNavigate();
    const [integrantes, setIntegrantes] = useState();
    useEffect(function () {
        IntegrantesService.getIntegrantes()
        .then(({data}) => {
            setIntegrantes(data)
        })
    }, [setIntegrantes])

    const PutIntegrantes = useCallback((id, data) => {
        IntegrantesService.putIntegrantes(id, data)
        .then(({data}) => {
            console.log(data)
        })
    }, [setIntegrantes])

    return {
        integrantes: integrantes, PutIntegrantes
    }
}