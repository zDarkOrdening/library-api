import express from 'express'
import connectDB from './database/database'
import routes from './routes'

const port = 3000
const app = express()
app.use(express.json())
app.use(routes)
connectDB()

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})