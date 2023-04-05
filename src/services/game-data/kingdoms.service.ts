import { Request } from 'express';
import { ServiceAPIResponse } from '../../types/server/service-response.interface';
import { IKingdom } from '../../types/game-model/world/kingdom.interface';

var stateManager = require('../common/game-state-manager');
var logger = require('../other/logger');

const getAll = async (): Promise<ServiceAPIResponse<IKingdom[]>> => {
  /* fetch data from db here */
  logger.log('getAll()', 'Kingdoms route');
  let kingdoms = stateManager.getGameState().kingdoms;
  return {
    statusCode: 200,
    body: kingdoms
  };
};

const getById = async (req: Request): Promise<ServiceAPIResponse<IKingdom>> => {
  /* fetch data from db here */
  /* id: req.params?.id */
  const id = req.params?.id;
  logger.log(`getById(${id})`, 'Kingdoms route');
  let kingdoms: IKingdom[] = stateManager.getGameState().kingdoms;
  let kingdom = kingdoms.filter((k) => k.id == id);

  if (kingdom) {
    return {
      statusCode: 200,
      body: kingdom[0]
    };
  } else {
    return {
      statusCode: 404,
      body: {
        id: '',
        name: '',
        partyID: ''
      }
    };
  }
};

export { getAll, getById };
