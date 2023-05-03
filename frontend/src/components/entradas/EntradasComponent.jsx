import React, {useState} from "react";
import "./EntradasComponent.css"
import MapBox from "../MapBox/MapBoxComponent"
import {TbArmchair} from "react-icons/tb"
import { useEntradasReserved } from "../../hooks/useEntradasReserved";
import swal from 'sweetalert'

const EntradasComponent = (props) => {
    const {BuyEntradaReserved} = useEntradasReserved()
    const [id_entrada, setEntrada] = useState()
    const [id_user, setUser] = useState()
    console.log(props)
    const formEntrada = {
        "id_entrada": id_entrada,
        "id_user": id_user
    }
    // const reserved_asiento = (value) => (
    //     print(infoAsiento)
    // )

    const CreatedEntrada = (value) => {
        swal({
            title: "Test",
            text: "eeeee"
        })
        // formEntrada.id_entrada = value.id,
        // formEntrada.id_user = 3,
        // BuyEntradaReserved(formEntrada)
    }
    return (
        <div className="p-5 divEntradas">
            {
                props.entradasbyPartido ? 
                <div>
                    <h1>Entradas disponibles partido:</h1>
                    <div className="partidosEntradas">
                        <strong className="p-5">{props.entradasbyPartido[0].id_partido.eq1}</strong>
                        <img src={"/" + props.entradasbyPartido[0].id_partido.img_partidos.split(":")[0]} style={{ width: "140px" }} />
                        <img src={"/" +props.entradasbyPartido[0].id_partido.img_partidos.split(":")[1]} style={{ width: "140px" }} />
                        <strong className="p-5">{props.entradasbyPartido[0].id_partido.eq2}</strong>
                        <div>
                            <strong>{props.entradasbyPartido[0].id_partido.horario.slice(11).split("Z")}</strong><p></p>
                            <strong>{props.entradasbyPartido[0].id_partido.horario.slice(0, 10)}</strong>
                        </div>
                    </div>
                
                    <div className="estadio">
                        {props.entradasbyPartido?.map((data, index) => (
                            <div className="fila" onClick={() => CreatedEntrada(data)} title={   "Graderia: " + data.graderia + ". " +
                                                            "Fila: " + data.fila + ". "+ 
                                                            "Asiento: " + data.asiento
                                                        }>
                                <div>
                                    <TbArmchair className={`${data.disponible ? "asiento" : "seleccionado"}`} style={{ fontSize: "40px" }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>:
                <div>
                    <h1>Aun no han salido entradas para el partido seleccionado</h1>
                </div>
            }
        </div>
    )

}

export default EntradasComponent