import React, {Suspense} from "react";
import { useEntradas } from "../hooks/useEntradas";

const EntradasComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/entradas/EntradasComponent")), 1500)
    })
})

const EntradasPage = () => {
    const {entradas} = useEntradas()
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <EntradasComponent entradas={entradas}/>
        </Suspense>
    )

}

export default EntradasPage