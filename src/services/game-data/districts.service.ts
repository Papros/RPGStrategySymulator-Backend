import { Request } from 'express';
import { ServiceAPIResponse } from '../../types/server/service-response.interface';
import { IDistrict } from '../../types/game-model/world/district.interface';
import { DefaultValue } from '../../types/game-model/default-value.dictionary';

var stateManager = require('../common/game-state-manager');

const getAll = async (): Promise<ServiceAPIResponse<IDistrict[]>> => {
  /* fetch data from db here */
  let districts: IDistrict[] = stateManager.getGameState().map;

  return {
    statusCode: 200,
    body: districts
  };
};

const getById = async (req: Request): Promise<ServiceAPIResponse<IDistrict>> => {
  /* fetch data from db here */
  /* id: req.params?.id */
  let districts: IDistrict[] = stateManager.getGameState().map;

  let returnDist = districts.filter((dist) => dist.id === req.params?.id)?.[0];
  returnDist = returnDist ? returnDist : DefaultValue.District;
  return {
    statusCode: 200,
    body: returnDist
  };
};

export { getAll, getById };
