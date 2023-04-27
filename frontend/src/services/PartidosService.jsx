import http from "./http"

const PartidosService = {
    getAllPartidos() {
        return http().get("/server/partidos")
    },
    GetPartidosbyCompeti(id) {
        return http().get("/server/partidos/" + id)
    }
}

export default PartidosService;