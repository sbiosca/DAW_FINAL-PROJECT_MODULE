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
                            <strong>{data.id}</strong><p></p>
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


