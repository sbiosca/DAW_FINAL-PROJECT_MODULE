import http from "./http"

const EntradasService = {
    getEntradas() {
        return http().get("/server/entradas")
    },
    GetEntradasByPartido(id) {
        return http().get("/server/entradas/" + id)
    }
}

export default EntradasService;