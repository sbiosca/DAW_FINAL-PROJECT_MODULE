import http from "./http"

const ShopService = {
    getShop() {
        return http().get("/server/tienda")
    },
}

export default ShopService;