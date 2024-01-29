import express from 'express'
import { connectToDB } from './config/db'
const PORT = 3000
const app = express()
void connectToDB()



app.get('/', (req, res) => {
  res.json({ message: 'This is the index' })
})

app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`) })
