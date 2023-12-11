const express = require('express');
const router= express.Router();
const projet_ctr= require('./controller/projet.controller');
const sector_ctr= require('./controller/sector.controller')
const subSector_ctr= require('./controller/subSector.controller')

router.post("/projet/create",projet_ctr.create);

router.get("/projets",projet_ctr.getAll);

router.get("/sectors",sector_ctr.getAll);

router.get("/subsectors",subSector_ctr.getAll);

router.put("/projet/update",projet_ctr.update);

router.delete("/projet/delete",projet_ctr.delete);

module.exports= router;