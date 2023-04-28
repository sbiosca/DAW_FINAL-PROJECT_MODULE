import { useEffect, useCallback, useState, useContext } from "react";
import ProductsService from "../services/ProductsService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import ProductsContext from "../context/ProductsContext"

export function useProducts() {
    const navigate = useNavigate();
    const [products, setProducts] = useState();
    const [productsfiltered, setProductsFiltered] = useState();
    const {checkProductsContext} = useContext(ProductsContext)
    useEffect(function () {
        ProductsService.getProducts()
        .then(({data}) => {
            setProducts(data)
        })
    }, [setProducts])

    const ProductFiltered = useCallback((data) => {
        checkProductsContext(data)
    }, [])

    return {
        products: products, productsfiltered, ProductFiltered
    }
}