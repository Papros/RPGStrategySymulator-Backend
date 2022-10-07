
import { Request } from 'express'
import { ServiceAPIResponse } from '../../types/server/service-response'
import { District } from '../../types/game-model/world/district'
import { TerrainType } from '../../types/game-model/enums/terrain.enum';
import { ResourceType } from '../../types/game-model/enums/resource.enum';

var stateManager = require('../common/game-state-manager');

const blankDistrict = {
  id: '0',
  position: { x: 0, y: 0},
  terrain: { type: TerrainType.FIELDS },
  resource: { type: ResourceType.NOTHING },
  kingdomID: '1',
};

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
  let districts:District[] = stateManager.getGameState().map;

  let returnDist = districts.filter((dist) => dist.id === req.params?.id)?.[0];
  returnDist = returnDist ? returnDist : blankDistrict;
  return {
    statusCode: 200,
    body: returnDist,
  }
}

export { getAll, getById }