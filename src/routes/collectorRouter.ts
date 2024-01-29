import { Router } from 'express'
import {
  createCollectorAccount,
  getCollectorByUsername,
  getCollectors
} from '../controllers/collertorControllers'

const router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/new', createCollectorAccount)
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', getCollectors)
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/:username', getCollectorByUsername)

export default router
