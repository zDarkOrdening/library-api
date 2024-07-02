import mongoose from 'mongoose'
import { mongoUri } from '../env/environment'

const connectDB = async () => {
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