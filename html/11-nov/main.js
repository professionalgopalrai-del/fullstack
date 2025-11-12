const users = [];

function addUser(user) {
    users.push(user);
}

function listUser() {
    return users;
}

module.exports = {
    addUser,
    listUser
}
