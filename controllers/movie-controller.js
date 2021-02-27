//Requiero el modelo de movie para crear la clase controladora
const Movie = require("../models/movie-model");

class MovieController {

    constructor() {
    }
    //Métodos del controlador
    async indexAll() {
        return Movie.find();
    }

    async store(movie) {
        return Movie.create(movie);
    }

    async update(id, movie) {    
        return Movie.findByIdAndUpdate(id,movie);
    }

    async destroy(id) {
        return Movie.findByIdAndRemove(id);
    }

};


const movieController = new MovieController();
module.exports = movieController;