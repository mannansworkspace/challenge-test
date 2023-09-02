const mongoose = require('mongoose');
const { modelReferences } = require('../constants');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    agreeToTerms: {
        type: Boolean,
        required: true
    },
    sectors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: modelReferences.SECTOR
    },
    ],

});
const User = mongoose.model('User', userSchema);


module.exports = User