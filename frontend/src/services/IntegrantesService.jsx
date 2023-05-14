import http from "./http"

const IntegrantesService = {
    getIntegrantes() {
        return http().get("/server/integrantes")
    },
    putIntegrantes(id, data) {
        return http().put("/server/integrantes/update/" + id, data)
    }
}

export default IntegrantesService;