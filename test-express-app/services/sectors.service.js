const { Sector } = require("../models")
const recursivePopulate = require("../utils/subSectorRecursivePopulate.util")

const getAllSectors = async () => {
    const sectors = await Sector.find({ isRoot: true })

    await Promise.all(
        sectors.map(async (sector) => {
            await recursivePopulate(sector)
        })
    )

    return sectors
}

module.exports = {
    getAllSectors
}