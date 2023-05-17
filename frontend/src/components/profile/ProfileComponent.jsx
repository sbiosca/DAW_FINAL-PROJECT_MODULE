import React from "react";
import "./ProfileComponent.css"
import {BsDownload} from "react-icons/bs"

const ProfileComponent = (props) => {

    return (
        <div className="divProfile">
            <div className="container">
                <h1 className="text-center">Perfil de Usuario</h1>
                <div className="row">
                    <div className="col-md-4">
                        <img src={props.infoUser?.id_profile[0].avatar} className="img-fluid rounded-circle" />
                    </div>
                    <div className="col-md-8">
                        <div className="p-2">
                            <strong>Nick:</strong>
                            <input type="text" readOnly value={props.infoUser?.username} className="bg-transparent text-center border-0"/>
                        </div>
                        <div className="p-2">
                            <strong>Correo:</strong>
                            <input type="text" readOnly value={props.infoUser?.id_profile[0].correo} className="bg-transparent text-center border-0"/>
                        </div>
                        <div className="p-2">
                            <strong>Address:</strong>
                            <input type="text" readOnly value={props.infoUser?.id_profile[0].addres} className="bg-transparent text-center border-0"/>
                        </div>
                        <div className="p-2">
                            <strong>Telefono:</strong>
                            <input type="text" readOnly value={props.infoUser?.id_profile[0].num_telf} className="bg-transparent text-center border-0"/>
                        </div>
                        <div className="p-2">
                            <strong>Nombre Completo:</strong>
                            <input type="text" readOnly value={props.infoUser?.id_profile[0].name_complet} className="bg-transparent text-center border-0"/>
                        </div>
                    </div>
                    <h1>ENTRADAS</h1>
                    {props.entradasReservedUser?.map((data, index) => (
                        <div className="entradaReservedUser m-3">
                            <div className="text-center" ref={props.contentRef}>
                                <h3 className="text-center p-2">Entrada de: {data.id_user.username}</h3>
                                <strong className="p-5">{data.id_entrada.partido_id.eq1}</strong>
                                <img src={"/" + data.id_entrada.partido_id.img_partidos.split(":")[0]} style={{ width: "140px" }} />
                                <img src={"/" +data.id_entrada.partido_id.img_partidos.split(":")[1]} style={{ width: "140px" }} />
                                <strong className="p-5">{data.id_entrada.partido_id.eq2}</strong>
                                <div className="text-center p-3">
                                    <strong>{data.id_entrada.partido_id.horario.slice(11).split("Z")}</strong>&nbsp;
                                    <strong>{data.id_entrada.partido_id.horario.slice(0, 10)}</strong>
                                </div>
                                <div className="text-center">
                                    <strong>Asiento: {data.id_entrada.asiento}</strong><p></p>
                                    <strong>Fila: {data.id_entrada.fila}</strong><p></p>
                                    <strong>Graderia: {data.id_entrada.graderia}</strong><p></p>
                                    <strong>Precio: {data.id_entrada.precio} €</strong><p></p>
                                </div>
                            </div>
                            <button onClick={props.generatePDF} className="btn">
                                <BsDownload style={{ fontSize: "40px" }} />
                            </button>                           
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )

}

export default ProfileComponent


