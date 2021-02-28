//Requerimos de la librería express el método router
const router = require("express").Router();

//importamos el controlador de user
const userController = require("../controllers/user-controller")

//traer todos los users
router.get("/", async (req,res)=>{
    try{
        res.json(await userController.showAllUsers());

    }catch(error){
        return res.status(500).json({
            message: "Server Error"
        });
    };
});