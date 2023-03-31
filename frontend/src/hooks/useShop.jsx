import { useEffect, useCallback, useState } from "react";
import ShopService from "../services/ShopService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function useShop() {
    const navigate = useNavigate();
    const [shop, setShop] = useState();
    useEffect(function () {
        ShopService.getShop()
        .then(({data}) => {
            setShop(data)
        })
    }, [setShop])

    return {
        shop: shop
    }
}