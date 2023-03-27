import React from "react";
// import "./EquipoComponent.css"

const EquipoComponent = (props) => {
    console.log(props)
    return (
        <div className="p-5"> 
            {props.equipo?.map((data, index) => (
                    <h1>
                        {data.name}
                    </h1>
            ))}
        </div>
    )

}

export default EquipoComponent