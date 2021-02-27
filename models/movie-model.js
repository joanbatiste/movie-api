//Requerimos todo lo necesario de la librería mongoose para crear el modelo de pelicula
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title:{
        type: String, 
        default: "movie"   
    },
    year: {
        type: Number
    },
    overview: {
        type: String
    },
    image: {
        type: String
    },
    genre: {
        type: String,
        enum:
        {
            "Action":28,
            "Adventure":12,
            "Animation":16,
            "Comedy": 35,
            "Crime": 80,
            "Documentary": 99,
            "Drama": 18,
            "Family": 10751,
            "Fantasy": 14,
            "History": 36,
            "Horror": 27,
            "Music": 10402,
            "Mystery": 9648,
            "Romance":10749,
            "Science Fiction":878,
            "Thriller":53,
            "War": 10752,
            "Western": 37
        }    
    },
    adult: {
        type: Boolean,
        default: false
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;