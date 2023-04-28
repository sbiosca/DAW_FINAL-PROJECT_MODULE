import http from "./http"

const ProductsService = {
    getProducts() {
        return http().get("/server/productos")
    },
    getProductsFiltered(data) {
        return http().post("/server/productos_productsFiltered", data)
    },
}

export default ProductsService;