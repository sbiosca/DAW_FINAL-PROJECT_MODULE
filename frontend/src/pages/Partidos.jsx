import React, {Suspense, useEffect} from "react";
import { usePartidos } from "../hooks/usePartidos";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const PartidosComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/partidos/PartidosComponent")), 1500)
    })
})

const PartidosPage = () => {
    const { id } = useParams();
    const {partidos, GetPartidosbyCompeti, partidosbyCompeti} = usePartidos();

    useEffect(() => {
        GetPartidosbyCompeti(id)
    }, [id])
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <PartidosComponent partidos={partidos} partidos_competi={partidosbyCompeti}/>
        </Suspense>
    )

}

export default PartidosPage