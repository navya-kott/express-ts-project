import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export const User = mongoose.model("User", UserSchema)
