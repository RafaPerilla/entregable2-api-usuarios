const usersDB = []
const id = 1

const getAllUsers = () => {
    return usersDB
}

const getUserById = (id) => {
    const user = usersDB.find(user => user.id == id)
    return user
}

const createNewUser = (obj) => {
    const newDb = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }
    usersDB.push(newDb)
    return newDb
}

module.exports = {getAllUsers, getUserById, createNewUser}