//Requerimos el modelo de user para crear la clase controladora del user
const User = require("../models/user-model");

class UserController{
    constructor(){

    }
    async showAllUsers(){
        return User.find(users);
    }

};


const userController = new UserController();
module.exports = userController;