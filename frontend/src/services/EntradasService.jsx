import http from "./http"

const EntradasService = {
    getEntradas() {
        return http().get("/server/entradas")
    },
}

export default EntradasService;