import { useEffect, useCallback, useState } from "react";
import ProductsService from "../services/ProductsService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function useProducts() {
    const navigate = useNavigate();
    const [products, setProducts] = useState();
    useEffect(function () {
        ProductsService.getProducts()
        .then(({data}) => {
            setProducts(data)
        })
    }, [setProducts])

    return {
        products: products
    }
}