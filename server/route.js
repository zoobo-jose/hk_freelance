const express = require('express');
const router= express.Router();
const sector_ctr= require('./controller/sector.controller');
const subSector_ctr= require('./controller/subSector.controller');
const user_ctr= require('./controller/user.controller');


router.post("/user/create",user_ctr.create);

router.post("/user/byName",user_ctr.getByName);

router.get("/sectors",sector_ctr.getAll);

router.get("/subsectors",subSector_ctr.getAll);

router.put("/user/update",user_ctr.update);


module.exports= router;