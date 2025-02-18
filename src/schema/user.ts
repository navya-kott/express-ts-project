import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            unique:false
        },
        email: {
            type: String,
            required: true,
            unique:false

        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    })


export const User = mongoose.model("User", UserSchema)
