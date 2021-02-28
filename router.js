//Requerimos de express el método Router
const router = require('express').Router();

//Importamos los archivos router de cada metodo
const movieRouter = require('./routes/movie-router');
const userRouter = require("./routes/user-router");


router.use('/movies',movieRouter);
router.use("/users",userRouter);


module.exports = router;