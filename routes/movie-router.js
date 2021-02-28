//Requerimos de la librería express el metodo router
const router = require('express').Router();

//Importamos el controlador de movies
const movieController = require("../controllers/movie-controller");

//traer todas las pelis
router.get('/', async (req, res) => {
    try{
        res.json(await movieController.indexAll())

    } catch (error) {
        return res.Status(500).json({
            message: "Server Error"
        });

    }

});

//Traer una peli por ID
router.get("/:id", async (req, res)=>{
    try{
        const id = req.params.id;
        res.json(await movieController.findIdFilm(id));
    }catch(err){
        return res.status(500).json({
            message: err.message
        });
    }
});

//Traer una peli por título
router.get("/search",async (req, res) => {
    try {
        const title = await movieController.findByTitle(req.query);
        res.json(title)
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//Crear una pelicula
router.post('/', async(req, res)=>{
    try{
        const createdFilm = await movieController.store(req.body);
        res
        .status(200)
        .json(createdFilm);

    }catch(error){
        return res.status(500).json({
            message: "Server Error"
        });
    };
});

//Actualizar/editar pelis
router.put("/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedFilm = await movieController.update(id, req.body);
        res.status(200).json(updatedFilm);

    }catch(error){
        return res.status(500).json({
            message: "Server error"
        });

    };
});

//Eliminar pelis por id
router.delete("/:id", async(req, res)=>{
    try{
        const id = req.params.id;
        const status = "deleted";
        await movieController.destroy(id);
        res.json({status, id});

    }catch(error){
        return res.status(500).json({
            message: "Server error"
        });

    };
});


module.exports = router;