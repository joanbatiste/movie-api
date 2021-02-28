//Requerimos el modelo de user para crear la clase controladora del user
const User = require("../models/user-model");

class UserController{
    constructor(){

    }
    //Mostrar todos los user
    async showAllUsers(users){
        return User.find(users);
    };

    //Crear users
    async createNewUser(user){
        return User.create(user);
    };

    //Mostrar un user por Id
    async findById(id){
        return User.findById(id);
    };

    //Actualizar user por Id
    async updateUser(id, user){
        return User.findByIdAndUpdate(id, user, {new: true});
    };

    //Eliminar user por Id
    async destroy(id){
        return User.findByIdAndRemove(id);
    };

};


const userController = new UserController();
module.exports = userController;