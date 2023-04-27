import http from "./http"

const IntegrantesService = {
    getIntegrantes() {
        return http().get("/server/integrantes")
    },
}

export default IntegrantesService;