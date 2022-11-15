
import { District } from '@app/model/game-model/world';
import { ServiceAPIResponse } from '@app/model/server';
import { Request } from 'express';
import { ResourceType, TerrainType } from './../../model/game-model/index';

var stateManager = require('../common/game-state.service');

const blankDistrict = {
  id: '0',
  position: { x: 0, y: 0},
  terrain: { type: TerrainType.FIELDS },
  resource: { type: ResourceType.NOTHING },
  kingdomID: '1',
};

const getAllDistricts = async (): Promise<ServiceAPIResponse<District[]>> => {
  /* fetch data from db here */
  let districts:District[] = stateManager.getGameState().map;

  return {
    statusCode: 200,
    body: districts,
  }
}

const getDistrictById = async (req: Request): Promise<ServiceAPIResponse<District>> => {
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

export { getAllDistricts, getDistrictById }