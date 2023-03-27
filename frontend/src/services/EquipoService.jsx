import http from "./http"

const EquipoService = {
    getEquipo() {
        return http().get("/server/equipo")
    },
}

export default EquipoService;