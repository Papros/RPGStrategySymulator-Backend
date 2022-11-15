import * as mapService from '../services/game-data/map.service';
import { Request, Response } from 'express'

const getRandomMap = async (req: Request, res: Response) => {
    try {
      const data = await mapService.generateRandomMap(req);
  
      res.status(data.statusCode).send(data.body);
    } catch (e: any) {
      res.status(500).send(e.message)
    }
  }

const getMap = async (req: Request, res: Response) => {
  try {
    const data = await mapService.getMap(req);

    res.status(data.statusCode).send(data.body)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
}

export { getRandomMap, getMap }