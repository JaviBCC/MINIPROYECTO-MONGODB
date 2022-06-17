const {Router} = require ("express")
const router = Router();
const photosCtrl = require("../controller/profesionales.controller")


// PROFESIONALES //

router.get("/", profesionalesCtrl.getStart);

router.get("/profesionales/:id", profesionalesCtrl.getProfesionales);

router.get("/profesionales", profesionalesCtrl.getProfesionales);

router.post("/profesionales", profesionalesCtrl.postProfesionales);

// router.put("/profesionales", profesionales.putProfesionales);

// router.delete("/profesionales", profesionales.deleteProfesionales);



module.exports = router;