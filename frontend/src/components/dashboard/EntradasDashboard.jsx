import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {AiFillCheckCircle} from "react-icons/ai"
import {RiQuestionAnswerFill} from "react-icons/ri"
import {MdCancel, MdSend} from "react-icons/md"
import { useEntradas } from "../../hooks/useEntradas";
import EntradasContext from "../../context/EntradasContext"

import {  toast } from 'react-toastify';

const EntradasDashboard = (props) => {
    const {PutEntradas} = useEntradas();
    const {Entradasfiltered} = useContext(EntradasContext)
    const [viewAnswer, SetView] = useState(false)
    const [idAnswer, SetId] = useState()
    const [asiento, SetAsiento] = useState()
    const [graderia, SetGraderia] = useState()
    const [fila, SetFila] = useState()
    const [precio, SetPrecio] = useState()
    const [disponible, SetDisponible] = useState()
    const [partidoId, SetPartidoId] = useState()
    const navigate = useNavigate();
    
    const datas = {
        "asiento": asiento,
        "graderia": graderia,
        "fila": fila,
        "precio": precio,
        "disponible": disponible,
    }
    const submit = (id) => {
        console.log(id)
        PutEntradas(id, datas)
        SetView(false)
    }
   
    return (
        <tbody>
        {
            Entradasfiltered?.map((data, index) => (
                <tr>
                    <td scope="row" className="entrada_id" title={data.partido_id.eq1 + " VS " + data.partido_id.eq2}>{data.id}</td>
                    <td className="partido">
                        {
                            viewAnswer && idAnswer == data.id ?
                            <input type="text" id="partido_id.id" name="partido_id.id" defaultValue={data.partido_id.id} onKeyUp={event => SetPartidoId(event.target.value)}/> :
                            <div>
                                {data.partido_id.id}
                            </div>
                        }
                    </td>
                    <td className="asiento">
                        {
                            viewAnswer && idAnswer == data.id ?
                            <input type="text" id="asiento" name="asiento" defaultValue={data.asiento} onKeyUp={event => SetAsiento(event.target.value)}/> :
                            <div>
                                {data.asiento}
                            </div>
                        }
                    </td>
                    <td className="fila">
                        {
                            viewAnswer && idAnswer == data.id ?
                            <input type="text" id="fila" name="fila" defaultValue={data.fila} onKeyUp={event => SetFila(event.target.value)}/> :
                            <div>
                                {data.fila}
                            </div>
                        }
                    </td>
                    <td className="graderia">
                        {
                            viewAnswer && idAnswer == data.id ?
                            <input type="text" id="graderia" name="graderia" defaultValue={data.graderia} onKeyUp={event => SetGraderia(event.target.value)}/> :
                            <div>
                               {data.graderia}
                            </div>
                        }
                    </td>
                    <td className="precio">
                        {
                            viewAnswer && idAnswer == data.id ?
                            <input type="text" id="precio" name="precio" defaultValue={data.precio} onKeyUp={event => SetPrecio(event.target.value)}/> :
                            <div>
                               {data.precio} €
                            </div>
                        }
                    </td>
                    <td className="disponible">
                        {
                            viewAnswer && idAnswer == data.id ?
                                <div>
                                    {
                                        data.disponible && disponible ? 
                                        <input type="checkbox" id="disponible" name="disponible" defaultChecked onClick={() => SetDisponible(false)}/> :
                                        <input type="checkbox" id="disponible" name="disponible" onClick={() => SetDisponible(true)}/>
                                    }
                                </div>:
                                <div>
                                    {
                                        data.disponible ? 
                                        <input type="checkbox" id="disponible" name="disponible" checked/> :
                                        <input type="checkbox" id="disponible" name="disponible" disabled/>
                                    }
                                </div>
                        }
                    </td>
                    <td className="operations">
                        {
                            viewAnswer && idAnswer == data.id ?
                                <RiQuestionAnswerFill onClick={() => [SetView(false), SetId(data.id)]} style={{ fontSize: "60px" }} className="btn btn-click" /> :
                                <RiQuestionAnswerFill onClick={() => [SetView(true), SetId(data.id), SetAsiento(data.asiento), 
                                    SetGraderia(data.graderia), SetFila(data.fila), SetPrecio(data.precio),SetDisponible(data.disponible)
                                ]} style={{ fontSize: "60px" }} className="btn btn-click text-primary" />
                        }
                        <MdSend onClick={() => submit(data.id)} style={{ fontSize: "60px" }} className="btn btn-click text-primary" />
                        <MdCancel style={{ fontSize: "60px" }} className="btn btn-click text-danger" />
                    </td>
                </tr>
            ))
        }
        </tbody>
    )
}

export default EntradasDashboard
