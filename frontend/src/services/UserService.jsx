import http from "./http"

const UserService = {
    usersLogin(data) {
        return http().post("/server/users_login", data)
    },
    usersRegister(data) {
        return http().post("/server/users_register", data)
    },
    getProfile(id) {
        return http().get("/server/users_profile/"+ id)
    },
    isAdmin(id) {
        return http().get("/server/users_admin/"+ id)
    },
    AllUsers() {
        return http().get("/server/users")
    }

}

export default UserService;