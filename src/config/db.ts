import mongoose from 'mongoose'
import { configDotenv } from 'dotenv'
configDotenv()

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const DB_URI: string = process.env.DB_URI!

export async function connectToDB (): Promise<void> {
  await mongoose.connect(DB_URI)
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'mongo connection error'))
}
