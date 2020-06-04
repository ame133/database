let mongoose = require('mongoose');
    let Pintores = require('../models/Pintores');

let pintoresControllers = {}

pintoresControllers.list = (req, res)=>{
    Pintores.find({})
    .limit(20)
    .skip(0)
    .exec((err, pintor)=>{
        if (err){
            console.log('error: ', err)
        }
        res.render('../views/index', {
            pintores: pintor,
            titulo: "Listado de pintores",
            year: new Date().getDate()
        })
    })
};

module.exports =pintoresControllers;