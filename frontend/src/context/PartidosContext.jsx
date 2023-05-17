import React, { useEffect, useState } from "react";

import PartidosService from "../services/PartidosService"
const Context = React.createContext({})
export function PartidosContextProvider({ children }) {
    const [Partidosfiltered, setPartidosFiltered] = useState();
    
    const checkPartidosContext = async () => {
        PartidosService.getAllPartidos()
            .then(({ data }) => {
                console.log(data)
                setPartidosFiltered(data)
        })

    }
    return (
        <Context.Provider value={{ checkPartidosContext, Partidosfiltered, setPartidosFiltered}}>{children}</Context.Provider>
    );
}
export default Context