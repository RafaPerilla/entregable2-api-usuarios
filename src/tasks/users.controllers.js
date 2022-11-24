let usersDB = []
let id = 1

const getAllUsers = () => {
    return usersDB
}

const getUserById = (id) => {
    const user = usersDB.find(user => user.id == id)
    return user
}
const deleteUserById = (id) => {
    let user = usersDB.filter(user => user.id != id)
    usersDB = user
    return user
}

const createNewUser = (obj) => {
    const newDb = {
        id: id++,
        firstName: obj.firstName,
        lastName: obj.lastName,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }
    usersDB.push(newDb)
    return newDb
}



module.exports = {getAllUsers, getUserById, createNewUser, deleteUserById}