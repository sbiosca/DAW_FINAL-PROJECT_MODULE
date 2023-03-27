import { useEffect, useCallback, useState } from "react";
import EquipoService from "../services/EquipoService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function useEquipo() {
    const navigate = useNavigate();
    const [equipo, setEquipo] = useState();
    useEffect(function () {
        EquipoService.getEquipo()
        .then(({data}) => {
            setEquipo(data)
        })
    }, [setEquipo])

    return {
        equipo: equipo
    }
}