import http from "./http"

const PartidosService = {
    getAllPartidos() {
        return http().get("/server/partidos")
    },
    GetPartidosbyCompeti(id) {
        return http().get("/server/partidos/" + id)
    },
    addPartidos(data) {
        return http().post("/server/partidos_add", data)
    },
    deletePartidos(id) {
        return http().delete("/server/partidos_delete/" + id)
    }
}

export default PartidosService;