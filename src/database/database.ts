import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI
  if (!mongoUri) {
    throw new Error('MONGO_URI must be defined')

  }
  try {
    const conn = await mongoose.connect(mongoUri)
    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    process.exit(1)
  }
}

export default connectDB