import mongoose from 'mongoose'

export default () => {
  try {
    console.log("Connected to mongodb", process.env.DB_URL)
    const URL = process.env.DB_URL || 'mongodb://localhost:27017/car'
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    
  } catch (error) {
    console.log("error");
  }
}

