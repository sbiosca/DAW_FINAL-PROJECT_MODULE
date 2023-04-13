import http from "./http"

const UserService = {
    usersLogin(data) {
        return http().post("/server/users_login", data)
    },
    usersRegister(data) {
        return http().post("/server/users_register", data)
    }
}

export default UserService;