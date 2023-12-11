const Sector= require('../models/sector.model')


exports.getAll=(req,res,next)=>{
    Sector.find().then((sectors)=>{
        res.json(sectors)
    }).catch((error)=>{
        console.log("=== > error ",error)
    })
}

