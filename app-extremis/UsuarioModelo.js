var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UsuarioModelo = new Schema({
    nome:{
        type: String,
        required:true
    },
    data:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("usuarios", UsuarioModelo);