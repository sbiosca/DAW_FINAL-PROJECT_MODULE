import React, { useState } from "react";
import "./ProductsComponent.css"
import {FiShoppingCart} from "react-icons/fi"
import {MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md"

const ProductsComponent = (props) => {
    const [name, setName] = useState()
    const [talla, setTalla] = useState()
    const [type, setType] = useState()
    const [like, setlike] = useState(false)
    const [idlike, setIDlike] = useState()
    const viewlike = (value, id) => {
        setlike(value)
        setIDlike(id)
    }
    const likes = {
        "id": idlike,
        "like": like
    }
    
    const formFiltered = {
        "name": name ? name : "",
        "talla": talla ? talla : "",
        "type": type ? type : ""
    }
    if (formFiltered.name || formFiltered.talla || formFiltered.type) {
        props.formFiltered(formFiltered)
    }
    return (
        <div className="p-5">
            <div className="filters">
                <select onChange={event => setTalla(event.target.value)}>
                    <option label="TALLA" disabled selected />
                    {props.products?.map((data, index) => (
                        <option >{data.talla}</option>
                    ))}
                    <option></option>
                </select>&nbsp;
                <select onChange={event => setType(event.target.value)}>
                    <option label="TYPE" disabled selected />
                    {props.products?.map((data, index) => (
                        <option >{data.type}</option>
                    ))}
                    <option></option>
                </select>
            </div>
            <div className="contentProducts">
                {props.products?.map((data, index) => (
                    <div className="products">
                        <strong>{data.name}</strong>
                        <div style={{height: "80%"}}>
                            <img style={{width: "190px", margin: "20px"}} src={data.img.split(":")[0]}/>
                        </div>
                        <div className="p-1">
                            <FiShoppingCart style={{fontSize: "30px"}}/>&nbsp;
                            {
                                likes.like && likes.id == data.id ? 
                                <MdOutlineFavorite onClick={() => viewlike(false, data.id)} style={{fontSize: "30px"}}/>:
                                <MdOutlineFavoriteBorder onClick={() => viewlike(true, data.id)} style={{fontSize: "30px"}}/>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default ProductsComponent