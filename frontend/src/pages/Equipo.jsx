import React from "react";
import EquipoComponent from "../components/equipo/EquipoComponent"
import { useEquipo } from "../hooks/useEquipo";

const EquipoPage = () => {
    const {equipo} = useEquipo()
    return (
        <EquipoComponent equipo={equipo}/>
    )

}

export default EquipoPage