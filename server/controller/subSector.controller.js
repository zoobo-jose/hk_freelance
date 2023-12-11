const SubSector= require('../models/subSector.model')


exports.getAll=(req,res,next)=>{
    SubSector.find().then((subSectors)=>{
        res.json(subSectors)
    }).catch((error)=>{
        console.log("=== > error ",error)
    })
}
