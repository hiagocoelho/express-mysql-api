const express = require('express')
const router = express.Router()
const UsuarioController = require('../controllers/usuarioController.js')
const Usuario = require('../models/usuario.js')

router.post('/usuarios', UsuarioController.Insert) // CREATE
router.get('/usuarios', UsuarioController.SearchAll) // READ
router.get('/usuarios/:id', UsuarioController.SearchOne) // DETAILS
router.put('/usuarios/:id', UsuarioController.Update) // UPDATE
router.delete('/usuarios/:id', UsuarioController.Delete) // DELETE

module.exports = router