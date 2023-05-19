import axios from "axios"

export default function http() {
    return axios.create({
        baseURL: "http://localhost:8000/",
        //baseURL: "http://192.168.1.101:8000/",
        headers: {
            "Content-type": "application/json",
        }
    });
}