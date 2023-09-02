import http from "./http.service"

const getAllSectors = async () => {
    try {
        const { sectors } = await http.get('/sectors')
        return sectors
    } catch (error) {
        console.log({ error })
    }
}

export default {
    getAllSectors
}

