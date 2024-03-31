const { Router } = require("express");

const router = Router()
//const conection = require('./database/conection')

const UserController = require('./Controller/UserController')


router.get('/', UserController.index)
router.post('/cadastrar', UserController.store)
router.delete('/deletar/:id', UserController.delete)


module.exports = router