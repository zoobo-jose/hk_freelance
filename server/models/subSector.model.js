const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// schema du model
const subSectorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        type: {
            type: Schema.Types.ObjectId,
            ref: "sector",
            required: true
        },
    }
)
module.exports = mongoose.model('subSector', subSectorSchema);