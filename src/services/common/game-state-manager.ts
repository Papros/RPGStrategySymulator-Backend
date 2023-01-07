import { GameState } from '../../types/game-model/complex/game-object';
import { BasicMapGenerator } from '../../scripts/game/map-generators/basic-map-generator/map-generator.script';
import { IDistrict } from '../../types/game-model/world/district';
import { CreationRulesAmountValue, CreationRulesSizeValue, ICreationRules } from '../../types/game-model/world/creation-rules';
import { IMapGenerator } from '../../scripts/game/map-generators/interface/map-generator.interface';
import { ProceduralMapGenerator } from '../../scripts/game/map-generators/procedural-map-generator/procedural-map-generator.script';
import { DefaultValue } from '../../types/game-model/default-value';

var logger = require('../other/logger');

let gameState: GameState = {
  map: [],
  pureMap: [],
  kingdoms: []
};

function loadLastGameState(): boolean {
  let generator: IMapGenerator;

  //generator = new BasicMapGenerator();
  generator = new ProceduralMapGenerator();

  let rules = DefaultValue.CreationRules;

  let map = generator.generateMap(rules);
  logger.log('Loading map...', 'gameStateManager');
  gameState.pureMap = map;
  gameState.kingdoms = [
    { id: '1', name: 'Polska' },
    { id: '2', name: 'Niemcy' },
    { id: '3', name: 'Francja' },
    { id: '4', name: 'Włochy' },
    { id: '5', name: 'Hiszpania' },
    { id: '6', name: 'Austria' },
    { id: '7', name: 'Grecja' },
    { id: '8', name: 'Belgia' }
  ];
  gameState.map = generator.setKingdomsOnMap(map, gameState.kingdoms);
  return true;
}

function getGameState(): GameState {
  return gameState;
}

function saveGameStateInFile(): boolean {
  return true;
}

function loadGameStateFromFile(): GameState {
  return {
    map: [],
    pureMap: [],
    kingdoms: []
  };
}

function testGameStateSanity(state: GameState): boolean {
  return true;
}

module.exports = {
  loadLastGameState,
  getGameState
};
