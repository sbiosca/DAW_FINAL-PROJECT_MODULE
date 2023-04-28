import React, { useEffect, useState } from "react";

import ProductsService from "../services/ProductsService"
const Context = React.createContext({})
export function ProductsContextProvider({ children }) {
    const [productsfiltered, setProductsFiltered] = useState();
    
    const checkProductsContext = async (data) => {
        ProductsService.getProductsFiltered(data)
            .then(({ data }) => {
                console.log(data)
                setProductsFiltered(data)
        })

    }
    return (
        <Context.Provider value={{ checkProductsContext, productsfiltered, setProductsFiltered}}>{children}</Context.Provider>
    );
}
export default Context