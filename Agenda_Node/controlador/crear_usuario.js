
const Router = require('express').Router(),
      Usuario = require('../modelo/usuario')


  //Metodo que busca y verifica la existencia de los Usuarios del sistema (Crearlos si no existen)
  Router.get('/buscar_y_verificar_usuarios', function(req, res) {
    Usuario.find({}, (err, usuarios) => {
      if (err) {
        return res.status(500).send({message: 'Error al intentar obtener los usuarios. (status:500)'})
      }else{
        if (usuarios.length <= 0) {
			//Insertar un nuevo Usuario de sistema
			let nuevoUsuario1 = new Usuario()
			nuevoUsuario1.nombre = 'Pablo Castillo'
			nuevoUsuario1.email = 'pwcastillo@gmail.com'
			nuevoUsuario1.clave = '12345'
			nuevoUsuario1.save((err, usuario1) => {
			  	if (err) return res.status(500).send({message: 'Error al intentar insertar el usuario1. (status:500)'})
			})

			//Insertar un nuevo Usuario de sistema
			let nuevoUsuario2 = new Usuario()
			nuevoUsuario2.nombre = 'Wilmer Baquero'
			nuevoUsuario2.email = 'wbaquero12@gmail.com'
			nuevoUsuario2.clave = 'wb12345'
			nuevoUsuario2.save((err, usuario2) => {
			  	if (err) return res.status(500).send({message: 'Error al intentar insertar el usuario2. (status:500)'})
			})
        }else{
          return res.json(usuarios)
        }
      }
    })
  })


//Exportar el modulo
module.exports = Router
