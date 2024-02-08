const register = function(username) {
    console.log(` User ${username} has been register.`); // these are the backtcs or template strings in which we can wrapped strings or variables inside.
}

const login = function(username, password) {
    console.log(` User ${username} is logged in and password is ${password}`);
}

module.exports = {
    register,
    login
}
