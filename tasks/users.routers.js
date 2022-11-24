const userServices = require('./users.services')
const router = require('express').Router()


router.get('/users', userServices.findAllUsers)
router.post('/users', userServices.postNewUser)
router.get('/users/:id', userServices.findUserById)

module.exports = router