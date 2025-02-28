import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required:false
        },
        brand: {
            type: String,
            required: true,
            index: true
        },
        model: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },

        place: {
            type: String,
            required: true
        },
      
        image: {
            type: Buffer,
            required: false
        },
        createdAt: {
            type: Date,
            default: new Date()
        },
        updatedAt: {
            type: Date,
            default: new Date()
        }
    })

// CarSchema.index({ year: -1, model: 1 })

export const Car = mongoose.model("cars", CarSchema)
