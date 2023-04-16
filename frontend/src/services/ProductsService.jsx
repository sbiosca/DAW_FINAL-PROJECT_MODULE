import http from "./http"

const ProductsService = {
    getProducts() {
        return http().get("/server/productos")
    },
}

export default ProductsService;