import { Request, Response } from 'express'


import * as kingdomsService from '../services/game-data/kingdoms.service'

const getAllKingdoms = async (req: Request, res: Response) => {
  try {
    const data = await kingdomsService.getAllKingdoms()

    res.status(data.statusCode).send(data.body)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
}

const getKingdomById = async (req: Request, res: Response) => {
  const data = await kingdomsService.getKingdomById(req)

  res.status(data.statusCode).json(data.body)
}

export { getAllKingdoms, getKingdomById }