import http from "./http"

const EntradasService = {
    getEntradas() {
        return http().get("/server/entradas")
    },
    GetEntradasByPartido(id) {
        return http().get("/server/entradas/" + id)
    },
    putEntradas(id, data) {
        return http().put("/server/entradas/update/" + id, data)
    }
}

export default EntradasService;