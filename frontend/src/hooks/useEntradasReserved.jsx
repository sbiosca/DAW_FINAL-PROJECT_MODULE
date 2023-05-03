import { useEffect, useCallback, useState } from "react";
import EntradasReservedService from "../services/EntradasReservedService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function useEntradasReserved() {
    const navigate = useNavigate();
    const [entradasReserved, setEntradasReserved] = useState();
    useEffect(function () {
        EntradasReservedService.getEntradasReserved()
        .then(({data}) => {
            setEntradasReserved(data)
        })
    }, [setEntradasReserved])

    const BuyEntradaReserved = (data) => {
        EntradasReservedService.BuyEntradaReserved(data)
        .then(({data}) => {
            console.log(data)
        })
    }

    return {
        entradasReserved: entradasReserved, BuyEntradaReserved
    }
}