import http from "./http"

const NewsService = {
    getNews() {
        return http().get("/server/news")
    },
}

export default NewsService;