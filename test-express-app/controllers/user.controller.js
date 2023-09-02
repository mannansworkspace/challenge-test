const catchAsync = require("../utils/catchAsync.util");
const { userService } = require('../services/index.service')

const upsertUser = catchAsync(async (req, res) => {
    const data = req.body
    const user = await userService.upsertUser(data)
    return res.status(200).send({ succes: true, user })
})

module.exports = {
    upsertUser
}