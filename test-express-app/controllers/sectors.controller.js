const catchAsync = require("../utils/catchAsync.util");
const sectorsService = require('../services/sectors.service')

const getAllSectors = catchAsync(async (req, res) => {
    const sectors = await sectorsService.getAllSectors()
    return res.status(200).send({ succes: true, sectors })
})

module.exports = {
    getAllSectors
}