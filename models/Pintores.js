const mongoose  = require('mongoose');

let Schema = mongoose.Schema;

let PintoresSchema = new Schema({
    name: {type: String,
    required: [true, 'requerimos el nombre']
    },
    corriente: {
        type: String, 
        required: [true, 'requerimos el estilo']
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }
});

module.exports = mongoose.model('Pintores', PintoresSchema)