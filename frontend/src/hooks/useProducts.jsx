import { useEffect, useCallback, useState } from "react";
import ProductsService from "../services/ProductsService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function useProducts() {
    const navigate = useNavigate();
    const [products, setProducts] = useState();
    const [productsfiltered, setProductsFiltered] = useState();
    useEffect(function () {
        ProductsService.getProducts()
        .then(({data}) => {
            setProducts(data)
        })
    }, [setProducts])

    const ProductFiltered = (data) => {
        ProductsService.getProductsFiltered(data)
        .then(({data}) => {
            console.log(data)
            setProductsFiltered(data)
        })
    }

    return {
        products: products, productsfiltered, ProductFiltered
    }
}