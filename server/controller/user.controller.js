const User= require('../models/user.model');

// create user
exports.create=(req,res,next)=>{
    console.log(req.body)
    let user = new User({
        name:req.body.name,
        sector:req.body.sector,
        agree:req.body.agree
    })
    user.save().
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
// met a jour un projet
exports.update=(req,res,next)=>{
    let data={
        name:req.body.name,
        sector:req.body.sector,
        agree:req.body.agree
    }
    User.updateOne({_id:req.body._id},data).
    then(()=>{
        res.json({message:"update"})
    }).catch((error)=>{
        console.log("=== > ",error);
        res.json({message:"error"})
    })
}
// renvoie tous les projets
exports.getByName=(req,res,next)=>{
    console.log(req.body.name)
    User.findOne({name:req.body.name}).then((user)=>{
        console.log(user)
        res.json(user)
    }).catch((error)=>{
        console.log("=== > error ",error)
    })
}