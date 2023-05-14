import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {AiFillCheckCircle} from "react-icons/ai"
import {RiQuestionAnswerFill} from "react-icons/ri"
import {MdCancel, MdSend} from "react-icons/md"
import { useIntegrantes } from "../../hooks/useIntegrantes";

import {  toast } from 'react-toastify';

const IntegrantesDashboard = (props) => {
    const {PutIntegrantes, integrantes} = useIntegrantes();
    const [viewAnswer, SetView] = useState(false)
    const [idAnswer, SetId] = useState()
    const [name, SetName] = useState()
    const [apellidos, SetApellidos] = useState()
    const [nacionalidad, SetNacionalidad] = useState()
    const [fech_naci, SetFech_Naci] = useState()
    const [avatar, SetAvatar] = useState()
    const [dorsal, SetDorsal] = useState()
    const [tarjetas_amar, SetTarjetas_amar] = useState()
    const [tarjetas_roj, SetTarjetas_roj] = useState()
    const [goles, SetGoles] = useState()
    const [lesionado, SetLesionado] = useState()
    const [player_id, SetPlayer_id] = useState()
    const [tecnico_id, SetTecnico_id] = useState()
    const [type, SetType] = useState()
    const navigate = useNavigate();
    
    const datas = {
        "name": name,
        "apellidos": apellidos,
        "nacionalidad": nacionalidad,
        "fech_naci": fech_naci,
        "avatar": avatar,
        "player_id": player_id,
        "tecnico_id": tecnico_id,
        "type": type,
        "dorsal": dorsal,
        "tarjetas_amar": tarjetas_amar,
        "tarjetas_roj": tarjetas_roj,
        "goles": goles,
        "lesionado": lesionado
    }
    const submit = (id) => {
        console.log(id)
        PutIntegrantes(id, datas)
        SetView(false)
        setTimeout(() => {
            console.log(integrantes)
        }, 500);
    }
   
    return (
        <tbody>
            {props.integrantes?.map((data, index) => (
                <tr>
                    <td scope="row" className="integrante_id">
                        {data.id}
                    </td>
                    <td className="nameTd">
                        {
                            viewAnswer && idAnswer == data.id ?
                                <input type="text" id="name" name="name" defaultValue={data.name + " " + data.apellidos} /> :
                                <div>
                                    {data.name} {data.apellidos}
                                </div>
                        }
                    </td>
                    <td className="fech_naci">
                        {
                            viewAnswer && idAnswer == data.id ?
                                <input type="text" id="fech_naci" name="fech_naci" defaultValue={data.fech_naci} onKeyUp={event => SetFech_Naci(event.target.value)}/> :
                                <div>
                                    {data.fech_naci}
                                </div>
                        }
                    </td>
                    <td className="naci">
                        {
                            viewAnswer && idAnswer == data.id ?
                                <input type="text" id="nacionalidad" name="nacionalidad"
                                 defaultValue={data.nacionalidad} onKeyUp={event => SetNacionalidad(event.target.value)}/> :
                                <div>
                                    {data.nacionalidad}
                                </div>
                        }
                    </td>
                    <td className="type">
                        {
                            data.id_tecn.id == 0 ?
                                "Jugador" :
                                "Cuerpo tecnico"
                        }
                    </td>
                    <td className="dorsal">
                        {
                            viewAnswer && idAnswer == data.id ?
                                <input type="text" id="dorsal" name="dorsal" defaultValue={data.id_player.dorsal} onKeyUp={event => SetDorsal(event.target.value)}/> :
                                <div>
                                    {data.id_player.dorsal}
                                </div>
                        }
                    </td>
                    <td className="tarjetas_amar">
                        {
                            viewAnswer && idAnswer == data.id ?
                                <input type="text" id="tarjetas_amar" name="tarjetas_amar" defaultValue={data.id_player.tarjetas_amar} 
                                        onKeyUp={event => SetTarjetas_amar(event.target.value)}/> :
                                <div>
                                    {data.id_player.tarjetas_amar}
                                </div>
                        }
                    </td>
                    <td className="tarjetas_roj">
                        {
                            viewAnswer && idAnswer == data.id ?
                                <input type="text" id="tarjetas_roj" name="tarjetas_roj" defaultValue={data.id_player.tarjetas_roj} 
                                onKeyUp={event => SetTarjetas_roj(event.target.value)}/> :
                                <div>
                                    {data.id_player.tarjetas_roj}
                                </div>
                        }
                    </td>
                    <td className="goles">
                        {
                            viewAnswer && idAnswer == data.id ?
                                <input type="text" id="goles" name="goles" defaultValue={data.id_player.goles} 
                                onKeyUp={event => SetGoles(event.target.value)}/> :
                                <div>
                                    {data.id_player.goles}
                                </div>
                        }
                    </td>
                    <td className="lesionado">
                        {
                            viewAnswer && idAnswer == data.id ?
                                <div>
                                    {
                                        data.id_player.lesionado && lesionado ? 
                                        <input type="checkbox" id="lesionado" name="lesionado" defaultChecked onClick={() => SetLesionado(false)}/> :
                                        <input type="checkbox" id="lesionado" name="lesionado" onClick={() => SetLesionado(true)}/>
                                    }
                                </div>:
                                <div>
                                    {
                                        data.id_player.lesionado ? 
                                        <input type="checkbox" id="lesionado" name="lesionado" checked/> :
                                        <input type="checkbox" id="lesionado" name="lesionado" disabled/>
                                    }
                                </div>
                        }
                    </td>
                    <td>
                        {
                            viewAnswer && idAnswer == data.id ?
                                <RiQuestionAnswerFill onClick={() => [SetView(false), SetId(data.id)]} style={{ fontSize: "60px" }} className="btn btn-click" /> :
                                <RiQuestionAnswerFill onClick={() => [SetView(true), SetId(data.id), SetName(data.name) , SetApellidos(data.apellidos),
                                    SetNacionalidad(data.nacionalidad), SetFech_Naci(data.fech_naci) , SetAvatar(data.avatar),
                                    SetDorsal(data.id_player.dorsal), SetTarjetas_amar(data.id_player.tarjetas_amar) , SetTarjetas_roj(data.id_player.tarjetas_roj),
                                    SetGoles(data.id_player.goles), SetPlayer_id(data.id_player.id) , SetLesionado(data.id_player.lesionado),
                                    SetTecnico_id(data.id_tecn.id), SetType(data.id_tecn.type)
                                ]} style={{ fontSize: "60px" }} className="btn btn-click text-primary" />
                        }
                        <MdSend onClick={() => submit(data.id)} style={{ fontSize: "60px" }} className="btn btn-click text-primary" />
                        <MdCancel style={{ fontSize: "60px" }} className="btn btn-click text-danger" />
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default IntegrantesDashboard