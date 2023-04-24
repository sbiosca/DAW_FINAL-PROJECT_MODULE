import React, {Suspense} from "react";
import { usePartidos } from "../hooks/usePartidos";

const PartidosComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/partidos/PartidosComponent")), 1500)
    })
})

const PartidosPage = () => {
    const {partidos} = usePartidos()
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <PartidosComponent partidos={partidos}/>
        </Suspense>
    )

}

export default PartidosPage