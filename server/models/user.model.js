const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// schema du model
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        sector: {
            type: Schema.Types.ObjectId,
            ref: "subSector",
            required: true
        },
        agree:{
            type:Boolean,
            default:false,
            require:true
        }
    }
)
module.exports = mongoose.model('user', userSchema);