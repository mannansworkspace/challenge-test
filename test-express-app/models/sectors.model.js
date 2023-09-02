const mongoose = require('mongoose');
const { modelReferences } = require('../constants');

const sectorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isRoot: {
        type: Boolean,
        default: true
    },
    subSectors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: modelReferences.SECTOR, // Referencing the SubSector schema
    }],
});

const Sector = mongoose.model(modelReferences.SECTOR, sectorSchema);

module.exports = Sector;