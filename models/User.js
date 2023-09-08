const mongoose = require('mongoose');
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Pls ennter email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Pls enter a valid emaile' ]
    },
    password: {
        type: String,
        required: [true,'Pls enter password' ],
        minlength: [6, 'Min password e mas de 6' ]
    },
})

// userSchema.post('save', function(doc, next){
//     console.log('new user was created')
// })

userSchema.pre('save',  async function (next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

// static method 7min

userSchema.statics.login = async function (email, password){
    const user = await this.findone({email})
    if(user){

    }
    throw Error('incorrect email')

}

const User = mongoose.model('user', userSchema)
module.exports = User;