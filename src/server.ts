import express from 'express'
import { connectToDB } from './config/db'
import collectorRouter from './routes/collectorRouter'
const PORT = process.env.PORT ?? 3000
const app = express()
void connectToDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'This is the index' })
})

app.use('/api/v1/collectors', collectorRouter)

app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`) })
