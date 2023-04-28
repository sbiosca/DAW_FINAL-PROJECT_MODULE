import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import '../../Partidoss/PartidossComponent.css'
import { usePartidos } from "../../hooks/usePartidos";
import Button from 'react-bootstrap/Button';

import {  toast } from 'react-toastify';

const CreatePartidos = () => {
    const partidos = usePartidos();
    const [isAdmin] = useState(true);
    
    const [competi, setCompeti] = useState();
    const [eq1, setEq1] = useState()
    const [eq2, setEq2] = useState()
    const [horario, setHorario] = useState();
    const [resultado, setResultado] = useState()
    const [img, setImg] = useState()
    const {CreatePartidos} = usePartidos();
    const navigate = useNavigate();
    
    const data = {
        "id_competi": competi,
        "eq1": eq1,
        "eq2": eq2,
        "horario": horario,
        "resultado": resultado ? resultado : "",
        "img_partidos": img
    }
    const submit = () => {
        CreatePartidos(data)
        toast('🚲 New Partidos!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
        navigate('/dashboard')
    }
   
    return (
        <div className="m-3 PartidosComponent">
            <h1 className="text-center">ADD Partidos</h1>
            <strong>Competicion OF Partidos: </strong>
            <input type={"text"} id="competi" onChange={event => setCompeti(event.target.value)}/><p></p>
            <strong>IMAGE OF Partidos: </strong>
            <input type={"url"} id="img" onChange={event => setImg(event.target.value)}/><p></p>
            <strong>Equipo Local </strong>
            <input type={"text"} id="eq1" onChange={event => setEq1(event.target.value)}/><p></p>
            <strong>Equipo Visitante </strong>
            <input type={"text"} id="eq2" onChange={event => setEq2(event.target.value)}/><p></p>
            <strong>Horario</strong>
            <input type={"text"} id="eq2" onChange={event => setHorario(event.target.value)}/><p></p>
            <input type={"button"}  value={"Add"} onClick={submit}/>
            
        </div>
    )
}

export default CreatePartidos