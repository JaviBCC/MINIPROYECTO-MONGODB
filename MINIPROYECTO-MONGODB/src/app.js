const express = require("express")
const cors = require('cors')

const profesionalesRouters 	= require("./routers/profesionales.routers")
const peliculasRouters 	    = require("./routers/peliculas.routers")

const errorHandling 	= require("./error/errorHandling")

const app = express();

app.set("port", process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(profesionalesRouters);
app.use(peliculasRouters);

app.use(function(req, res, next) {
	res.status(404).json({error:true,
			      codigo: 404,
			      message: "Endpoint doesnt found"})
})

app.use(errorHandling);

module.exports = app; 