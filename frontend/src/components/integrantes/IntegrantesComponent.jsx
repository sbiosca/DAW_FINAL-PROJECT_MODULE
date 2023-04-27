import React from "react";
import "./IntegrantesComponent.css"
import MapBox from "../MapBox/MapBoxComponent"

const IntegrantesComponent = (props) => {
    console.log(props)
    return (
        <div className="p-5 divIntegrantes"> 
            {props.integrantes?.map((data, index) => (
                <div>
                    {data.name}
                </div>
            ))}
        </div>
    )

}

export default IntegrantesComponent