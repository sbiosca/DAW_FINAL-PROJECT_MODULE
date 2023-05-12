import React, { useState } from "react";
import "./PartidosComponent.css"
import {Link} from 'react-router-dom'

const PartidosComponent = (props) => {
    console.log(props)
    const dateNow = Date.now();
    const hoy = new Date(dateNow);
    const formatData = hoy.toISOString().slice(0, 10)
    var fechaFin = new Date(formatData).getTime();
    return (
        <div className="p-5 divPartidos">
            <h1>PRÓXIMOS PARTIDOS</h1>
            {
                props.partidos_competi ?
                    <div>
                        {props.partidos_competi?.map((data, index) => (
                            <div>
                                {
                                    data.resultado ?
                                        <div></div> :
                                        <div className="partidos">
                                            <h3>{data.id_competi.name}</h3>
                                            <strong className="p-5">{data.eq1}</strong>
                                            <img src={"/" + data.img_partidos.split(":")[0]} style={{ width: "140px" }} />
                                            <img src={"/" + data.img_partidos.split(":")[1]} style={{ width: "140px" }} />
                                            <strong className="p-5">{data.eq2}</strong>
                                            <div>
                                                <strong>{data.horario.slice(11).split("Z")}</strong><p></p>
                                                <strong>{data.horario.slice(0, 10)}</strong>
                                            </div>
                                            <div>
                                                <Link to={"/entradas/"+ data.id} className="btn">
                                                    <span>Comprar Entradas</span>
                                                </Link>
                                            </div>
                                        </div>
                                }
                            </div>
                        ))}
                    </div> :
                    <div>
                        {props.partidos?.map((data, index) => (
                            <div>
                                {
                                    data.resultado ?
                                        <div></div> :
                                        <div className="partidos">
                                            <h3>{data.id_competi.name}</h3>
                                            <strong className="p-5">{data.eq1}</strong>
                                            <img src={"/" + data.img_partidos.split(":")[0]} style={{ width: "140px" }} />
                                            <img src={"/" + data.img_partidos.split(":")[1]} style={{ width: "140px" }} />
                                            <strong className="p-5">{data.eq2}</strong>
                                            <div>
                                                <strong>{data.horario.slice(11).split("Z")}</strong><p></p>
                                                <strong>{data.horario.slice(0, 10)}</strong>
                                            </div>
                                            <div>
                                                <Link to={"/entradas/"+ data.id} className={`${
                                                    new Date(data.horario.slice(0, 10)).getTime()/(1000*60*60*24) 
                                                    - fechaFin/(1000*60*60*24) < 60 ? "btn": "disabled btn"}`}>
                                                    <span>Comprar Entradas</span>
                                                </Link>
                                            </div>
                                        </div>
                                }
                            </div>
                        ))}
                    </div>
            } 
            <h1>RESULTADOS PARTIDOS</h1>
            {
                props.partidos_competi ?
                    <div>
                        {props.partidos_competi?.map((data, index) => (
                            <div>
                            {
                                data.resultado ?
                                <div className="partidos_resultados">
                                    <h3>{data.id_competi.name}</h3>
                                    <img src={"/" + data.img_partidos.split(":")[0]} style={{width: "140px"}}/>
                                    <strong className="p-5">{data.eq1}</strong>
                                    {data.resultado}
                                    <strong className="p-5">{data.eq2}</strong>
                                    <img src={"/" + data.img_partidos.split(":")[1]} style={{width: "140px"}}/>
                                    <div>
                                        <strong>{data.horario.slice(11).split("Z")}</strong>&nbsp;
                                        <strong>{data.horario.slice(0, 10)}</strong>
                                    </div>
                                </div>:
                                <div></div>
                            }
                            </div>
                        ))}   
                    </div> :
                    <div>
                        {props.partidos?.map((data, index) => (
                            <div>
                            {
                                data.resultado ?
                                <div className="partidos_resultados">
                                    <h3>{data.id_competi.name}</h3>
                                    <img src={"/" + data.img_partidos.split(":")[0]} style={{width: "140px"}}/>
                                    <strong className="p-5">{data.eq1}</strong>
                                    {data.resultado}
                                    <strong className="p-5">{data.eq2}</strong>
                                    <img src={"/" + data.img_partidos.split(":")[1]} style={{width: "140px"}}/>
                                    <div>
                                        <strong>{data.horario.slice(11).split("Z")}</strong>&nbsp;
                                        <strong>{data.horario.slice(0, 10)}</strong>
                                    </div>
                                </div>:
                                <div></div>
                            }
                            </div>
                        ))}   
                    </div>
            } 
        </div>
    )

}

export default PartidosComponent