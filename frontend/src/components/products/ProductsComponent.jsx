import React, { useState, useContext } from "react";
import "./ProductsComponent.css"
import {FiShoppingCart} from "react-icons/fi"
import {MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md"
import { useProducts } from "../../hooks/useProducts";
import ProductsContext from "../../context/ProductsContext"
import { Carousel } from 'react-responsive-carousel';


const ProductsComponent = (props) => {
    const {productsfiltered} = useContext(ProductsContext)
    const [name, setName] = useState()
    const [talla, setTalla] = useState()
    const [type, setType] = useState()
    const [like, setlike] = useState(false)
    const [idlike, setIDlike] = useState()
    const {ProductFiltered, products} = useProducts()
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

    const submit = () => {
        ProductFiltered(formFiltered)
        console.log(productsfiltered)
    }


    return (
        <div className="p-5">
            <div className="filters">
                <select onChange={event => setTalla(event.target.value)} className="select-blue">
                    <option label="TALLA" disabled selected />
                    {props.products?.map((data, index) => (
                        <option>{data.talla}</option>
                    ))}
                    <option></option>
                </select>&nbsp;
                <select onChange={event => setType(event.target.value)} className="select-yellow">
                    <option label="TYPE" disabled selected />
                    {props.products?.map((data, index) => (
                        <option >{data.type}</option>
                    ))}
                    <option></option>
                </select>&nbsp;
                <button className="btn btn-green" onClick={submit}>Add Filtros</button>
            </div>
            {
                productsfiltered ? 
                <div className="contentProducts">
                {productsfiltered?.map((data, index) => (
                    <div className="products">
                        <strong>{data.name}</strong>
                        <div style={{ height: "80%" }}>
                            {
                                data.img.split(":")[1] ?
                                    <Carousel showArrows={true} showIndicators={false} className="carouselStyleProduct" showThumbs={false}>
                                        <img style={{ width: "190px", margin: "20px" }} src={data.img.split(":")[0]} />
                                        <img style={{ width: "190px", margin: "20px" }} src={data.img.split(":")[1]} />
                                    </Carousel> :
                                    <img style={{ width: "190px", margin: "20px" }} src={data.img.split(":")[0]} />
                            }
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
                </div>:
                <div className="contentProducts">
                    {props.products?.map((data, index) => (
                        <div className="products">
                            <strong>{data.name}</strong>
                            <div style={{height: "80%"}}>
                                {
                                    data.img.split(":")[1] ?
                                    <Carousel showArrows={true} showIndicators={false} className="carouselStyleProduct" showThumbs={false}>
                                        <img style={{width: "190px", margin: "20px"}} src={data.img.split(":")[0]}/>
                                        <img style={{width: "190px", margin: "20px"}} src={data.img.split(":")[1]}/>
                                    </Carousel>: 
                                    <img style={{width: "190px", margin: "20px"}} src={data.img.split(":")[0]}/>
                                }
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
            }
        </div>
    )

}

export default ProductsComponent