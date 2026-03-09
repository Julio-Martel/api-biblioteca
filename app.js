const express = require("express");
const app = express();
const baseDeDatosLibros = require("./libros/libros");

app.use(express.json());

app.get("/libros", (req,res) => {
    res.json(baseDeDatosLibros);
})

app.get("/libros/:codigo",(req,res) => {
    const codigo = parseInt(req.params.codigo);
    const filtrarLibro = baseDeDatosLibros.findIndex(l => l.codigo === codigo);

    if(filtrarLibro !== -1){
        let libroEncontrado = baseDeDatosLibros[filtrarLibro];
        res.status(200).json({
            mensaje: "El libro filtrado es el siguiente",
            libro: libroEncontrado
        })
    } else {
        res.status(404).json(
           { mensaje: "No existe libro con ese codigo"}
        )
    }
})

app.listen(3000,() => {
    console.log("Servidor activo");
})