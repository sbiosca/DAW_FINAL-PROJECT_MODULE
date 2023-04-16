import React from "react";
import "./ProductsComponent.css"

const ProductsComponent = (props) => {
    return (
        <div className="p-5">
            <div className="contentProducts">
                {props.products?.map((data, index) => (
                    <div className="products">
                        <strong>{data.name}</strong>
                        <img style={{width: "190px", margin: "20px"}} src={data.img.split(":")[0]}/>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default ProductsComponent