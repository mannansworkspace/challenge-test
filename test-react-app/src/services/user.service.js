import http from "./http.service"

const upsertUser = async (user) => {
    try {
        const response = await http.post('/user', user)
        return response.user
    } catch (error) {
        console.log(error)
    }
}

export default {
    upsertUser
}