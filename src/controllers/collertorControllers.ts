import { type Request, type Response } from 'express'
import Collector, { type CollectorType } from '../models/collector'

export async function createCollectorAccount (req: Request, res: Response): Promise<void> {
  const { first_name: firstName, last_name: lastName, username } = req.body as CollectorType
  try {
    const newCollector = await Collector.create({
      first_name: firstName,
      last_name: lastName,
      username
    })
    await newCollector.save()
    res.status(200).json('Collector account successfully created ')
  } catch (error) {
    console.log(error)
  }
}

export async function getCollectors (req: Request, res: Response): Promise<void> {
  try {
    const collectorList = await Collector.find({}, '-_id -__v')
    res.status(200).json(collectorList)
  } catch (error) {
    console.log(error)
  }
}

export async function getCollectorByUsername (req: Request, res: Response): Promise<void> {
  try {
    const collector = await Collector.findOne({ username: req.params.username }, '-_id -__v').exec()
    if (collector === null) {
      res.status(401).json({ error: 'No collector with that username was found.' })
    } else {
      res.status(200).json(collector)
    }
  } catch (error) {
    console.log(error)
  }
}
