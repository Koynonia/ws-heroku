var express = require('express');
var router = express.Router();
var UsuarioModelo = require("../UsuarioModelo");

/* GET users listing. */
router.get('/', function(req, res, next) {

  UsuarioModelo.find({nome: 'Fernando'}, function(err, resultado){
    if(err){
      // @ts-ignore
      return handleError(err);
    }
    res.status(200).json(resultado);
  });
});

module.exports = router;
