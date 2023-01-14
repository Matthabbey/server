import mongoose, { Schema } from "mongoose";

export interface UserInstance{
    username: String,
    email: string,
    password: string,
    profilePicture: string

}

const UserSchema = new Schema<UserInstance>({
 
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        
    },
    profilePicture: {
        type: String,
        required: false,
        default: ""
    }
}, {
    timestamps: true
})

export const UserModel = mongoose.model<UserInstance>("Users", UserSchema)