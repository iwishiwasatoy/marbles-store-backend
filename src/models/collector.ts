import mongoose, { Schema } from 'mongoose'
import { type MarbleType } from './marble'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions

enum AccountType {
  COMMON = 'common',
  PREMIUM = 'premium'
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type CollectorType = {
  first_name: string
  last_name: string
  username: string
  marbles_collection?: MarbleType[]
  account_type: AccountType
}

const CollectorSchema = new Schema<CollectorType>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: false },
  username: { type: String, required: true },
  marbles_collection: [{ type: Schema.Types.ObjectId, ref: 'Marble' }],
  account_type: {
    type: String,
    required: false,
    enum: AccountType,
    default: AccountType.COMMON
  }
}, { collection: 'collectors' })

export default mongoose.model<CollectorType>('Collector', CollectorSchema)
