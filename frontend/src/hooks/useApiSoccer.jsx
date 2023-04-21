import { useEffect, useCallback, useState } from "react";
import ApiSoccerService from "../services/ApiSoccerService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function useApiSoccer() {
    const navigate = useNavigate();
    const [apiSoccer, setApiSoccer] = useState();
    useEffect(function () {
        ApiSoccerService.getEquipos()
        .then(({data}) => {
            setApiSoccer(data)
        })
    }, [setApiSoccer])

    return {
        apiSoccer: apiSoccer
    }
}