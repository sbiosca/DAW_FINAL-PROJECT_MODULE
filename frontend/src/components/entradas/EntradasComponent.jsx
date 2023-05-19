import React, {useState, useContext} from "react";
import "./EntradasComponent.css"
import MapBox from "../MapBox/MapBoxComponent"
import {TbArmchair} from "react-icons/tb"
import { useEntradasReserved } from "../../hooks/useEntradasReserved";
import swal from '@sweetalert/with-react'
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext"
import {  toast } from 'react-toastify';

const EntradasComponent = (props) => {
    const navigate = useNavigate();
    const {users} = useContext(UserContext)
    console.log(users?.id)
    const {BuyEntradaReserved} = useEntradasReserved()
    const [id_entrada, setEntrada] = useState()
    const [id_user, setUser] = useState()
    console.log(props)
    const formEntrada = {
        "id_entrada": id_entrada,
        "id_user": id_user
    }
    const CreatedEntrada = (value) => {
        if (!users) {
            toast.info('Debes iniciar sesión para poder adquirir una entrada', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            navigate('/login')
        }else if (value.disponible) {
            swal(
                <div>
                    <h1>Datos entrada</h1>
                    <h5>Precio:&nbsp;{value.precio}€</h5>
                    <p>Graderia:&nbsp;{value.graderia}</p>
                    <p>Fila:&nbsp;{value.fila}</p>
                    <p>Asiento:&nbsp;{value.asiento}</p>
                </div>
                , {
                    icon: "info",
                    buttons: ["Salir", "Siguiente"]
                }
            ).then(result => {
                if (result) {
                    swal(
                        <div>
                            <p>
                                Va a realizar la compra de la entrada para el partido el día &nbsp;
                                {value.id_partido.horario.slice(0, 10)}
                            </p>
                            <strong>¿Los datos son correctos?</strong>
                        </div>
                        , {
                            text: "Entrada",
                            icon: "info",
                            buttons: ["NO", "SI"]
                        }
                    ).then(result => {
                        if (result) {
                            swal(
                                <div>
                                    <h3>Compra realizada correctamente</h3>
                                    <strong>En su perfil tendrá su entrada con los datos para el acceso</strong>
                                </div>
                                , { icon: "success", }
                            ).then(result => {
                                formEntrada.id_entrada = value.id,
                                formEntrada.id_user = users?.id,
                                BuyEntradaReserved(formEntrada)
                            })
                        }
                    })
                }
            })
        }else {
            swal(
                <div>
                    <h1>ASIENTO NO DISPONIBLE</h1>
                </div>
                , {icon: "error",}
            )
        }

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