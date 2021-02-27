const router = require('express').Router();
const movieRouter = require('./routes/movie-router');


router.use('/movies',movieRouter);


module.exports = router;