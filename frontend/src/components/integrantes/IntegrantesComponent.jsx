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
                                    <img src={"/" + integrante.avatar} style={{ width: "100%" }} />
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
                                            <img src={"/" +data.avatar} className="imgAvatarIntegrante" />
                                            <strong className="text-dark">{data.name} {data.apellidos}</strong>
                                            <div className="integrantesText">
                                                <hr></hr>
                                                <div>
                                                    <h3 className="text-center">Jugador</h3>
                                                    <strong className="p-5">Goles: {data.id_player.goles}</strong><p></p>
                                                    <strong className="p-5">Dorsal: {data.id_player.dorsal}</strong>
                                                </div>
                                            </div>
                                        </div>:
                                        data.id_tecn.id != 0 &&  props.type == "tecnicos"?
                                        <div className="integrantesDiv" onClick={() => setIntegrante(data)}>
                                            <img src={"/" +data.avatar} className="imgAvatarIntegrante" />
                                            <strong className="text-dark">{data.name} {data.apellidos}</strong>
                                            <div className="integrantesText">
                                                <hr></hr>
                                                <h3 className="p-2">{data.id_tecn.type}</h3>
                                            </div>
                                        </div> :
                                        !props.type  ?
                                        <div className="integrantesDiv" onClick={() => setIntegrante(data)}>
                                            <img src={"/" +data.avatar} className="imgAvatarIntegrante" />
                                            <strong className="text-dark">{data.name} {data.apellidos}</strong>
                                            <div className="integrantesText">
                                                <hr></hr>
                                                {
                                                    data.id_tecn.id != 0 ?
                                                        <h3 className="p-2">{data.id_tecn.type}</h3> :
                                                        <div>
                                                            <h3 className="text-center">Jugador</h3>
                                                            <strong className="p-5">Goles: {data.id_player.goles}</strong><p></p>
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