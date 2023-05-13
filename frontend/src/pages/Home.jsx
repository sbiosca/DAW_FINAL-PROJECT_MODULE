import React, {useEffect} from "react";
import { useNews } from "../hooks/useNews";
import HomeComponent from "../components/home/HomeComponent"
import { useApiSoccer } from "../hooks/useApiSoccer";
import { usePartidos } from "../hooks/usePartidos";
import { useIntegrantes } from "../hooks/useIntegrantes";
import { useParams } from "react-router-dom";


const HomePage = () => {
    const { id } = useParams();
    const {partidos, GetPartidosbyCompeti, partidosbyCompeti} = usePartidos();
    const {integrantes} = useIntegrantes()
    const {news} = useNews()
    useEffect(() => {
        GetPartidosbyCompeti(id)
    }, [id])
    return (
        <HomeComponent partidos={partidos} GetPartidosbyCompeti={GetPartidosbyCompeti} integrantes={integrantes} news={news}/>
    )

}

export default HomePage