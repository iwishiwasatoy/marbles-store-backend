import mongoose, { Schema } from 'mongoose'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions

enum MarbleColor {
  RED = 'RED',
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  YELLOW = 'YELLOW'
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type MarbleType = {
  name: string
  color: MarbleColor
}

const MarbleSchema = new Schema<MarbleType>({
  name: { type: String, required: true },
  color: { type: String, required: true }
})

export default mongoose.model<MarbleType>('Marble', MarbleSchema)
