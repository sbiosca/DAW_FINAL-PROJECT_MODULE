import { useEffect, useCallback, useState } from "react";
import CompeticionService from "../services/CompeticionService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function useCompeticion() {
    const navigate = useNavigate();
    const [competicion, setCompeticion] = useState();
    useEffect(function () {
        CompeticionService.getCompeticion()
        .then(({data}) => {
            setCompeticion(data)
        })
    }, [setCompeticion])

    return {
        competicion: competicion
    }
}