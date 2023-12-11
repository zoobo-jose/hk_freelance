const mongoose= require('mongoose');
// schema du model
const sectorSchema=mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
    }
)
module.exports=mongoose.model('sector',sectorSchema);