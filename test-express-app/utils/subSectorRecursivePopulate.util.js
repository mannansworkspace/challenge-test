const recursivePopulate = async (subSector) => {

    if (!subSector.subSectors?.length) return

    await subSector.populate('subSectors')

    await Promise.all(subSector.subSectors.map(async (subSector) => {
        await recursivePopulate(subSector)
    }))

}

module.exports = recursivePopulate