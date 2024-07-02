import dotenv from "dotenv"
dotenv.config()

const mongoUri = process.env.MONGO_URI as string
const jwtSecret = process.env.JWT_SECRET as string

if (!mongoUri || !jwtSecret) {
  throw new Error("Missing environment variables")
}

export { mongoUri, jwtSecret }