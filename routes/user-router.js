//Requerimos de la librería express el método router
const router = require("express").Router();
const jwt = require('jsonwebtoken');

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

//Crear un user
router.post("/", async (req, res)=>{
    try{
        const user = await userController.createNewUser(req.body);
        const status = "Success";
        res.json({status, user});
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    };
});
//Login de user
router.post('/login',async (req, res) => {   
    try{
        const {email,password} = req.body;
        const jwt = await userController.login(email,password);
        res.json({jwt})
    } catch (error) {
        return res.status(401).json({
            message: error.message
        });
    }
});


//Traer un user por Id
router.get("/:id", async (req, res)=>{
    try{
        const id= req.params.id;
        res.json(await userController.findById(id));
    }catch(error){
        return res.status(500).json({
            message: err.message
        })
    };
})

//Actualizar datos de user
router.put("/:id", async (req, res)=>{
    try{
        const id = req.params.id;
        const updatedUser = await userController.updateUser(id, req.body);
        res.status(200).json(updatedUser);
    }catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
})

//Borrar user por Id
router.delete("/:id", async(req, res)=>{
    try{
        const id= req.params.id;
        const status = "deleted";
        await userController.destroy(id);
        res.json({status, id});
    }catch(err){
        return res.status(500).json({
            message: "Server error"
        });
        
    };
});

module.exports = router;