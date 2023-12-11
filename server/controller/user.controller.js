const User= require('../models/user.model');

// create user
exports.create=(req,res,next)=>{
    console.log(req.body)
    let user = new User({
        name:req.body.name,
        sector:req.body.sector,
        agree:req.body.agree
    })
    User.save().
    then((User)=>{
        res.json({
            message:"create",
            user:User
        })
    }).catch((error)=>{
        res.json({
            message:'erreur',
            response:false
        })
    })
   
}