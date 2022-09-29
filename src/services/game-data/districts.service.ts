
import { Request } from 'express'
import { ServiceAPIResponse } from '../../types/server/service-response'
import { District } from '../../types/game-model/world/district'

var stateManager = require('../common/game-state-manager');

const getAll = async (): Promise<ServiceAPIResponse<District[]>> => {
  /* fetch data from db here */
  let districts:District[] = stateManager.getGameState().map;

  return {
    statusCode: 200,
    body: districts,
  }
}

const getById = async (req: Request): Promise<ServiceAPIResponse<District>> => {
  /* fetch data from db here */
  /* id: req.params?.id */
  return {
    statusCode: 200,
    body: {
      id: '0',
      position: { x: 0, y: 0},
      kingdomID: '1',
    }
  }
}

export { getAll, getById }