import React from "react";
import "./ShopComponent.css"
import MapBox from "../MapBox/MapBoxComponent"
import Products from "../products/ProductsComponent"

const ShopComponent = (props) => {
    console.log(props)
    const formFiltered = (value) => (
        props.formFiltered(value)
    )
    return (
        <div className="p-5">
            <Products products={props.products} formFiltered={formFiltered}/>
            <MapBox data={props.shop}/>
        </div>
    )

}

export default ShopComponent