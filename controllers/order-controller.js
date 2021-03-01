//Requerimos los modelos de order, user y film
const Order = require("../models/order-model");
const User = require("../models/user-model");
const Movie = require("../models/movie-model");

//Creamos la clase alquiler

class Rent {
    constructor(){

    }

    //Create a new order
    async rentMovie (userId, filmId){
        const userEntity = await User.findById(userId);
        const movieEntity = await Movie.findById(filmId);
        if(!userEntity || !movieEntity){
            throw new Error("Movie or user not found")
        }
        return await Order.create({
            userId: userId,
            filmId: filmId
        });
    };

};

const orderController = new Rent();
module.exports = orderController;