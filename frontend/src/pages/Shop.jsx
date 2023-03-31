import React from "react";
import ShopComponent from "../components/shop/ShopComponent"
import { useShop } from "../hooks/useShop";

const ShopPage = () => {
    const {shop} = useShop()
    return (
        <ShopComponent shop={shop}/>
    )

}

export default ShopPage