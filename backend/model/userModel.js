import mongoose from 'mongoose'

const {Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

export const User=mongoose.model('User',userSchema);