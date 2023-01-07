import { Request } from 'express';
import { ServiceAPIResponse } from '../../types/server/service-response';
import { IDistrict } from '../../types/game-model/world/district';
import { IMapGenerator } from '../../scripts/game/map-generators/interface/map-generator.interface';
import { ProceduralMapGenerator } from '../../scripts/game/map-generators/procedural-map-generator/procedural-map-generator.script';
import { ICreationRules, CreationRulesAmountValue, CreationRulesSizeValue } from '../../types/game-model/world/creation-rules';
import { DefaultValue } from '../../types/game-model/default-value';

var logger = require('../other/logger');

const useMap = async (req: Request): Promise<ServiceAPIResponse<IDistrict[]>> => {
  logger.log('useMap', 'mapService');
  return {
    statusCode: 200,
    body: []
  };
};

const generateMap = async (req: Request): Promise<ServiceAPIResponse<IDistrict[]>> => {
  logger.log('generateMap', 'mapService');

  const rules: ICreationRules = req.body.rules;
  console.log(JSON.stringify(req.body));
  if (!rules) {
    logger.log('No rules found', 'mapService');
    return {
      statusCode: 400,
      body: []
    };
  }

  logger.log(`generating map from rules: ${rules}`, 'mapService');

  let generator: IMapGenerator;

  //generator = new BasicMapGenerator();
  generator = new ProceduralMapGenerator();

  //let rules: ICreationRules = DefaultValue.CreationRules;

  let map = generator.generateMap(rules);
  logger.log('Loading map...', 'gameStateManager');
  let kingdoms = [
    { id: '1', name: 'Polska' },
    { id: '2', name: 'Niemcy' },
    { id: '3', name: 'Francja' },
    { id: '4', name: 'Włochy' },
    { id: '5', name: 'Hiszpania' },
    { id: '6', name: 'Austria' },
    { id: '7', name: 'Grecja' },
    { id: '8', name: 'Belgia' }
  ];
  map = generator.setKingdomsOnMap(map, kingdoms);

  return {
    statusCode: 200,
    body: map
  };
};

export { generateMap, useMap };
