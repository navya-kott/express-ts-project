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
            default:"USER",
            unique: false
        },
        email: {
            type: String,
            required: true,
            unique: false
        },
        password: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    })

UserSchema.index({ name: "text" })
export const User = mongoose.model("User", UserSchema)
