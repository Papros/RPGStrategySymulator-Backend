
import { Kingdom } from '@app/model/game-model/world';
import { ServiceAPIResponse } from '@app/model/server';
import { Request } from 'express'

var stateManager = require('../common/game-state.service');
var logger = require('../other/logger.service');

const getAllKingdoms = async (): Promise<ServiceAPIResponse<Kingdom[]>> => {
  /* fetch data from db here */
  logger.log('getAll()', 'Kingdoms route');
  let kingdoms = stateManager.getGameState().kingdoms;
  return {
    statusCode: 200,
    body: kingdoms,
  }
}

const getKingdomById = async (req: Request): Promise<ServiceAPIResponse<Kingdom>> => {
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

export { getAllKingdoms, getKingdomById }