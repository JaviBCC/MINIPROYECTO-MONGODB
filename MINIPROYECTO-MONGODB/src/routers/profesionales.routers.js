const {Router} = require ("express")
const router = Router();
const profesionalesCtrl = require("../controller/profesionales.controller")


// PROFESIONALES //

router.get("/", profesionalesCtrl.getStart);

router.get("/profesionales/:id", profesionalesCtrl.getProfesionales);

router.get("/profesionales", profesionalesCtrl.getProfesionales);

router.post("/profesionales", profesionalesCtrl.postProfesionales);

router.put("/profesionales", profesionalesCtrl.putProfesionales);

router.delete("/profesionales", profesionalesCtrl.deleteProfesionales);



module.exports = router;