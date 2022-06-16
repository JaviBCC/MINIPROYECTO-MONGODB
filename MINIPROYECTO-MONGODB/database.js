let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://JaviBCC:TheVolcano-75-Mongo@cluster0.qcivj.mongodb.net/IMDB', 
                {useNewUrlParser: true, useUnifiedTopology: true})

.then((db)=> {

    console.log("database connected on " + db.connection.host)
})

.catch((error) => {
    console.log(error)
})
