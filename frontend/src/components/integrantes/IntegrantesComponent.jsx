import React, { useState } from "react";
import "./IntegrantesComponent.css"
import MapBox from "../MapBox/MapBoxComponent"

const IntegrantesComponent = (props) => {
    const [integrante, setIntegrante] = useState()
    console.log(props)
    return (
        <div className="p-5 divIntegrantes">
            {
                integrante ?
                    <div className="oneintegrante">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <img src={integrante.avatar} style={{ width: "70%" }} />
                                </div>
                                <div className="col-md-4">
                                    <div className="p-2">
                                        <h1 className="text-dark">{integrante.name} {integrante.apellidos}</h1>
                                    </div>
                                    {
                                        integrante.id_tecn.id != 0 ?
                                        <h1 className="text-dark">{integrante.id_tecn.type}</h1>:
                                        <div>
                                            <div className="p-2">
                                                <h3 className="">Dorsal: {integrante.id_player.dorsal}</h3>
                                            </div>
                                            <div className="p-2">
                                                <h3 className="">Goles: {integrante.id_player.goles}</h3>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div>
                        <h1 className="text-center">INTEGRANTES: {props.type}</h1>
                        <div className="integrantesPrin">
                            {props.integrantes?.map((data, index) => (
                                <div>
                                    {
                                        data.id_tecn.id == 0 &&  props.type == "jugadores"?
                                        <div className="integrantesDiv" onClick={() => setIntegrante(data)}>
                                            <img src={data.avatar} style={{ width: "60%" }} />
                                            <strong className="text-dark">{data.name} {data.apellidos}</strong>
                                            <div className="integrantesText">
                                                <hr></hr>
                                                <div>
                                                    <strong className="p-2">Jugador</strong>
                                                    <strong className="p-5">Goles: {data.id_player.goles}</strong>
                                                    <strong className="p-5">Dorsal: {data.id_player.dorsal}</strong>
                                                </div>
                                            </div>
                                        </div>:
                                        data.id_tecn.id != 0 &&  props.type == "tecnicos"?
                                        <div className="integrantesDiv" onClick={() => setIntegrante(data)}>
                                            <img src={data.avatar} style={{ width: "60%" }} />
                                            <strong className="text-dark">{data.name} {data.apellidos}</strong>
                                            <div className="integrantesText">
                                                <hr></hr>
                                                <strong className="p-2">{data.id_tecn.type}</strong>
                                            </div>
                                        </div> :
                                        !props.type  ?
                                        <div className="integrantesDiv" onClick={() => setIntegrante(data)}>
                                            <img src={data.avatar} style={{ width: "60%" }} />
                                            <strong className="text-dark">{data.name} {data.apellidos}</strong>
                                            <div className="integrantesText">
                                                <hr></hr>
                                                {
                                                    data.id_tecn.id != 0 ?
                                                        <strong className="p-2">{data.id_tecn.type}</strong> :
                                                        <div>
                                                            <strong className="p-2">Jugador</strong>
                                                            <strong className="p-5">Goles: {data.id_player.goles}</strong>
                                                            <strong className="p-5">Dorsal: {data.id_player.dorsal}</strong>
                                                        </div>
                                                }
                                            </div>
                                        </div>:
                                        <div></div>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
            }
        </div>
    )

}

export default IntegrantesComponent