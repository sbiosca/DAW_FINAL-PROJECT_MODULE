import React, { useEffect, useState } from "react";

import EntradasService from "../services/EntradasService"
const Context = React.createContext({})
export function EntradasContextProvider({ children }) {
    const [Entradasfiltered, setEntradasFiltered] = useState();
    
    const checkEntradasContext = async () => {
        EntradasService.getEntradas()
            .then(({ data }) => {
                console.log(data)
                setEntradasFiltered(data)
        })

    }
    return (
        <Context.Provider value={{ checkEntradasContext, Entradasfiltered, setEntradasFiltered}}>{children}</Context.Provider>
    );
}
export default Context