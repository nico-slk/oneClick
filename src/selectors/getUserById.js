const { users } = require("../components/Datos");

export const getUsersByID = (userId) => {
    const validUser = users.filter(user => user.id === userId)

    if (!validUser.inscludes(userId)) {
        throw new Error(`Usuario con el ID: ${userId} no existe`)
    }

    return users.filter(user => user.id === userId)
}