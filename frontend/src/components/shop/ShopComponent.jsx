import React from "react";
import "./ShopComponent.css"
import MapBox from "../MapBox/MapBoxComponent"
import Products from "../products/ProductsComponent"

const ShopComponent = (props) => {
    console.log(props)
    return (
        <div className="p-5">
            <Products products={props.products}/>
            <MapBox data={props.shop}/>
        </div>
    )

}

export default ShopComponent