import mongoose, { Schema } from 'mongoose'
import Marble, { type MarbleType } from './marble'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions

enum AccountType {
  COMMON = 'Common',
  PREMIUM = 'Premium'
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type CollectorType = {
  first_name: string
  last_name: string
  marbles_collection: MarbleType[]
  account_type: AccountType
}

const CollectorSchema = new Schema<CollectorType>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: false },
  marbles_collection: { type: [Marble] },
  account_type: {
    type: String,
    required: true,
    enum: AccountType,
    default: AccountType.COMMON
  }
})

export default mongoose.model<CollectorType>('Collector', CollectorSchema)
