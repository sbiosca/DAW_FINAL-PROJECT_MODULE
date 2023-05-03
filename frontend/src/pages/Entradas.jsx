import React, {Suspense, useEffect} from "react";
import { useEntradas } from "../hooks/useEntradas";
import {useParams } from "react-router-dom";

const EntradasComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/entradas/EntradasComponent")), 1500)
    })
})

const EntradasPage = () => {
    const { id } = useParams();
    const {entradas, GetEntradasByPartido, entradasbyPartido} = useEntradas()

    useEffect(() => {
        GetEntradasByPartido(id)
    }, [id])

    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <EntradasComponent entradas={entradas} entradasbyPartido={entradasbyPartido}/>
        </Suspense>
    )

}

export default EntradasPage