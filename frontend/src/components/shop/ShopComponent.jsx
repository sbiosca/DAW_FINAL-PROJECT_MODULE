import React from "react";
// import "./ShopComponent.css"
import MapBox from "../MapBox/MapBoxComponent"

const ShopComponent = (props) => {
    console.log(props)
    return (
        <div className="p-5"> 
            <MapBox data={props.shop}/>
        </div>
    )

}

export default ShopComponent