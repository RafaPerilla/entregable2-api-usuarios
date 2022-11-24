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

const postNewUser = (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body
    if(first_name && last_name && email && password && birthday) {
        const data = userController.createNewUser({first_name, last_name, email, password, birthday})
        res.status(201).json(data)
    } else {
        res.status(400).json({message: "invalid data", fields: {first_name: "string", last_name:"string", email: "string", password: "string", birthday: "YYYY/MM/DD"}})
    }
}

module.exports = {findAllUsers, findUserById, postNewUser}