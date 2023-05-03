import http from "./http"

const EntradasReservedService = {
    getEntradasReserved() {
        return http().get("/server/entrada_reserved")
    },
    BuyEntradaReserved(data) {
        return http().post("/server/entrada_reserved_buy", data)
    }
}

export default EntradasReservedService;