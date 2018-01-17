var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },  
    admin: Boolean,
})

const user = mongoose.model('user', userSchema)

module.exports = user;