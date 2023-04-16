import React, {Suspense} from "react";
import { useEquipo } from "../hooks/useEquipo";

const EquipoComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/equipo/EquipoComponent")), 1500)
    })
})

const EquipoPage = () => {
    const {equipo} = useEquipo()
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <EquipoComponent equipo={equipo}/>
        </Suspense>
    )

}

export default EquipoPage