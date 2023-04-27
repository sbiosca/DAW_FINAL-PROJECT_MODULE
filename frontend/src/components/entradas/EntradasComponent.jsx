import React, {useState} from "react";
import "./EntradasComponent.css"
import MapBox from "../MapBox/MapBoxComponent"
import {TbArmchair} from "react-icons/tb"

const EntradasComponent = (props) => {
    const [asiento, setAsiento] = useState(false)
    console.log(props)
    const view_asiento = (value) => (
        setAsiento(value)
    )
    return (
        <div className="p-5 divEntradas"> 
            <h1>Entradas</h1>
            <div className="estadio">
                    {
                        asiento ?
                        <div className="fila">
                            <div>
                                <TbArmchair className="seleccionado" onClick={() => view_asiento(false)} style={{ fontSize: "40px" }} />
                            </div>
                            <div>
                                <TbArmchair className="seleccionado" onClick={() => view_asiento(false)} style={{ fontSize: "40px" }} />
                            </div>
                            <div>
                                <TbArmchair className="seleccionado" onClick={() => view_asiento(false)} style={{ fontSize: "40px" }} />
                            </div>
                        </div>:
                        <div className="fila">
                            <div>
                                <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{fontSize: "40px"}}/>
                            </div>
                            <div>
                                <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{fontSize: "40px"}}/>
                            </div>
                            <div>
                                <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{fontSize: "40px"}}/>
                            </div> 
                        </div>
                    }
                <div className="fila">
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                </div>
                <div className="fila">
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                </div>
                <div className="fila">
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                </div>
                <div className="fila">
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                </div>
                <div className="fila">
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                </div>
                <div className="fila">
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                </div>
                <div className="fila">
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                </div>
                <div className="fila">
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                </div>
                <div className="fila">
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <TbArmchair className="asiento" onClick={() => view_asiento(true)} style={{ fontSize: "40px" }} />
                    </div>
                </div>

            </div>   
        </div>
    )

}

export default EntradasComponent