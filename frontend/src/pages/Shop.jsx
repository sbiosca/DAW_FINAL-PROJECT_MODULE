import React, {Suspense} from "react";
import { useShop } from "../hooks/useShop";
import { useProducts } from "../hooks/useProducts";

const ShopComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/shop/ShopComponent")), 1500)
    })
})

const ShopPage = () => {
    const {shop} = useShop()
    const {products} = useProducts()
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <ShopComponent products={products} shop={shop}/>
        </Suspense>
    )

}

export default ShopPage