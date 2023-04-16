// import React, {Suspense} from "react";
// import { useProducts } from "../hooks/useProducts";

// const ProductsComponent = React.lazy(() => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(import("../components/products/ProductsComponent")), 1500)
//     })
// })

// const ProductsPage = () => {
//     return (
//         <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
//             <ProductsComponent products={products}/>
//         </Suspense>
//     )

// }

// export default ProductsPage