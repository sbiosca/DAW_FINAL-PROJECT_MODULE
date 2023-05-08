import http from "./http"

const EntradasReservedService = {
    getEntradasReserved() {
        return http().get("/server/entrada_reserved")
    },
    getEntradasReservedByUser(id) {
        return http().get("/server/entrada_reserved/" + id)
    },
    BuyEntradaReserved(data) {
        return http().post("/server/entrada_reserved_buy", data)
    }
}

export default EntradasReservedService;