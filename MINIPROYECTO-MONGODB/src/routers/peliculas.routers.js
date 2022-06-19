const {Router} = require ("express")
const router = Router();
const peliculasCtrl = require("../controller/peliculas.controller")


// // PELIICULAS //

router.get("/", peliculasCtrl.getStart);

router.get("/peliculas/:id", peliculasCtrl.getPeliculas);

router.get("/peliculas", peliculasCtrl.getPeliculas);

router.get("/peliculas/actors/:id", peliculasCtrl.getPeliculasActor)

router.get("/peliculas/director/:id", peliculasCtrl.getPeliculasDirector)

router.get("/peliculas/guionista/:id", peliculasCtrl.getPeliculasGuionista)

router.get("/peliculas/productora/:id", peliculasCtrl.getPeliculasProductora)

router.post("/peliculas", peliculasCtrl.postPeliculas);

router. post("/peliculas/actors/", peliculasCtrl.postPeliculasActor);

router.post("/peliculas/director/", peliculasCtrl.postPeliculasDirector);

router.post("/peliculas/guionista/", peliculasCtrl.postPeliculasGuionista);

router.put("/peliculas", peliculasCtrl.putPeliculas);

router.delete("/peliculas", peliculasCtrl.deletePeliculas);

router.delete("/peliculas/actors", peliculasCtrl.deletePeliculasActor);

router.delete("/peliculas/director", peliculasCtrl.deletePeliculasDirector);

router.delete("/peliculas/guionista", peliculasCtrl.deletePeliculasGuionista);



module.exports = router;