import http from "./http"

const PartidosService = {
    getAllPartidos(id) {
        if (id) {
            return http().get("/server/partidos/" + id)
        }else {
            return http().get("/server/partidos")
        }
    },
}

export default PartidosService;