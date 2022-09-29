
import { Request } from 'express'
import { ServiceAPIResponse } from '../../types/server/service-response'
import { Kingdom } from '../../types/game-model/world/kingdom'

var stateManager = require('../common/game-state-manager');
var logger = require('../other/logger');

const getAll = async (): Promise<ServiceAPIResponse<Kingdom[]>> => {
  /* fetch data from db here */
  logger.log('getAll()', 'Kingdoms route');
  let kingdoms = stateManager.getGameState().kingdoms;
  return {
    statusCode: 200,
    body: kingdoms,
  }
}

const getById = async (req: Request): Promise<ServiceAPIResponse<Kingdom>> => {
  /* fetch data from db here */
  /* id: req.params?.id */
  const id = req.params?.id;
  logger.log(`getById(${id})`, 'Kingdoms route');
  let kingdoms:Kingdom[] = stateManager.getGameState().kingdoms;
  let kingdom = kingdoms.filter(k => k.id == id);

  if(kingdom) {
    return {
      statusCode: 200,
      body: kingdom[0],
    }
  }
  else {
    return {
      statusCode: 404,
      body: {
        id: '',
        name: ''
      }
    }
  }
}

export { getAll, getById }