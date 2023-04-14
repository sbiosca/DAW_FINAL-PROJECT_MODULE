import React from "react";
import HeaderComponent from "../components/header/HeaderComponent"
import {useCompeticion} from "../hooks/useCompeticiones"

const HeaderPage = () => {
    const {competicion} = useCompeticion()
    console.log(competicion)
    return (
        <HeaderComponent competicion={competicion}/>
    )

}

export default HeaderPage