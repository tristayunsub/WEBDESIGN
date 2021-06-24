const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')


//user 스키마 생성 with mongoose
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})

UserSchema.methods.isValidPassword = async function(password) {
    try {
      return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw error 
    }
}


//패스워드 hashing
UserSchema.pre('save', async function (next)  { 
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    } catch (error) {
        next(error)
    }
})





const User = mongoose.model('user', UserSchema)
module.exports = User
