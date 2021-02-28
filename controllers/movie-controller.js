//Requiero el modelo de movie para crear la clase controladora
const { title } = require("process");
const Movie = require("../models/movie-model");

class MovieController {

    constructor() {
    }
    //Métodos del controlador
    async indexAll() {
        return Movie.find();
    }

    //Encontrar por id
    async findIdFilm(id){
        return Movie.findById(id);
    }

    //Encontrar por titulo
    async findByTitle({query}) {
        if(query == undefined)
            return []
        else
            return Movie.find({"title": query});
    };

    //Crear y guardar una peli
    async store(movie) {
        return Movie.create(movie);
    };

    //Actualizar una peli
    async update(id, movie) {    
        return Movie.findByIdAndUpdate(id,movie,{new: true});
    };

    //Borrar una peli
    async destroy(id) {
        return Movie.findByIdAndRemove(id);
    };

};


const movieController = new MovieController();
module.exports = movieController;