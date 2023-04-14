import http from "./http"

const CompeticionService = {
    getCompeticion() {
        return http().get("/server/competiciones")
    },
}

export default CompeticionService;