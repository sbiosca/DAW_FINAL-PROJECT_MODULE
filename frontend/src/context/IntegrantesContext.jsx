import React, { useEffect, useState } from "react";

import IntegrantesService from "../services/IntegrantesService"
const Context = React.createContext({})
export function IntegrantesContextProvider({ children }) {
    const [Integrantesfiltered, setIntegrantesFiltered] = useState();
    
    const checkIntegrantesContext = async () => {
        IntegrantesService.getIntegrantes()
            .then(({ data }) => {
                console.log(data)
                setIntegrantesFiltered(data)
        })

    }
    return (
        <Context.Provider value={{ checkIntegrantesContext, Integrantesfiltered, setIntegrantesFiltered}}>{children}</Context.Provider>
    );
}
export default Context