//Requerimos de la librería express el metodo router
const router = require('express').Router();

//Importamos el controlador de movies
const movieController = require("../controllers/movie-controller");

router.get('/', async (req, res) => {
    try{
        res.json(await movieController.indexAll())

    } catch (error) {
        return res.Status(500).json({
            message: "Server Error"
        });

    }

});
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