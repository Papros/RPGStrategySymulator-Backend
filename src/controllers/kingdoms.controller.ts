import { Request, Response } from 'express'


import * as kingdomsService from '../services/game-data/kingdoms.service'

const getAll = async (req: Request, res: Response) => {
  try {
    const data = await kingdomsService.getAll()

    res.status(data.statusCode).send(data.body)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
}

const getById = async (req: Request, res: Response) => {
  const data = await kingdomsService.getById(req)

  res.status(data.statusCode).json(data.body)
}

export { getAll, getById }