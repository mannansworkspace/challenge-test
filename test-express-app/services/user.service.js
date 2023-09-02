const httpStatus = require("http-status")
const { ApiError } = require("../middlewares/error.middleware")
const { User } = require("../models")

const upsertUser = async (data) => {
    const { _id, name, sectors, agreeToTerms } = data

    if (!name || !sectors.length || typeof agreeToTerms === 'undefined') {
        throw new ApiError(httpStatus.BAD_REQUEST, "Name, Sectors and Agreement are required")
    }

    let user = await User.findOneAndUpdate({ _id }, { name, sectors, agreeToTerms }, { new: true })
    if (!user) {
        user = await User.create({ name, sectors, agreeToTerms })
    }
    return user.populate('sectors')
}

module.exports = {
    upsertUser
}