import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b17b03b6-2d31-4790-9f74-b832676893cd"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    }
}