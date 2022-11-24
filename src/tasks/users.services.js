const userController = require('./users.controllers')

const findAllUsers = (req, res) => {
    const data = userController.getAllUsers()
    if(data) {
    res.status(200).json(data)
    } else {
        res.status(400).json({message: "invalid"})
    }
}

const findUserById = (req, res) => {
    const id = req.params.id
    const data = userController.getUserById(id)
    if(data) {
    res.status(200).json(data)
    } else {
        res.status(404).json({message: "invalid ID"})
    }
}

const removeUserById = (req, res) => {
    const id = req.params.id
    const data = userController.deleteUserById(id)
    if(data) {
    res.status(200).json(data)
    } else {
        res.status(404).json({message: "invalid ID"})
    }
}

const postNewUser = (req, res) => {
    const {firstName, lastName, email, password, birthday} = req.body;

    if(firstName && lastName && email && password && birthday) {

        const data = userController.createNewUser({firstName, lastName, email, password, birthday});
        res.status(200).json(data)
    } else {
        res.status(400).json({message: "Invalid data", fields:{firstName:"string", 
        lastName:"string", email:"string", password:"string", birthday:"YYYY/MM/DD"}})
    }
}



module.exports = {findAllUsers, findUserById, postNewUser,removeUserById}