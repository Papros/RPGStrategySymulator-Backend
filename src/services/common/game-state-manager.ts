import { IGameState } from '../../types/game-model/complex/game-object.interface';
import { BasicMapGenerator } from '../../scripts/game/map-generators/basic-map-generator/map-generator.script';
import { IDistrict } from '../../types/game-model/world/district.interface';
import { CreationRulesAmountValue, CreationRulesSizeValue, ICreationRules } from '../../types/game-model/world/creation-rules.interface';
import { IMapGenerator } from '../../scripts/game/map-generators/interface/map-generator.interface';
import { ProceduralMapGenerator } from '../../scripts/game/map-generators/procedural-map-generator/procedural-map-generator.script';
import { DefaultValue } from '../../types/game-model/default-value.dictionary';

var logger = require('../other/logger');

let gameState: IGameState = {
  map: [],
  kingdoms: [],
  general: {
    pureMap: [],
    creationRules: DefaultValue.CreationRules
  }
};

function loadLastGameState(): boolean {
  let generator: IMapGenerator;

  //generator = new BasicMapGenerator();
  generator = new ProceduralMapGenerator();

  let rules = DefaultValue.CreationRules;

  let map = generator.generateMap(rules);
  logger.log('Loading map...', 'gameStateManager');
  gameState.general.pureMap = map;
  gameState.kingdoms = [
    { id: '1', partyID: '', name: 'Polska' },
    { id: '2', partyID: '', name: 'Niemcy' },
    { id: '3', partyID: '', name: 'Francja' },
    { id: '4', partyID: '', name: 'Włochy' },
    { id: '5', partyID: '', name: 'Hiszpania' },
    { id: '6', partyID: '', name: 'Austria' },
    { id: '7', partyID: '', name: 'Grecja' },
    { id: '8', partyID: '', name: 'Belgia' }
  ];
  gameState.map = generator.setKingdomsOnMap(map, gameState.kingdoms);
  return true;
}

function getGameState(): IGameState {
  return gameState;
}

function saveGameStateInFile(): boolean {
  return true;
}

function loadGameStateFromFile(): IGameState {
  return {
    map: [],
    kingdoms: [],
    general: {
      pureMap: [],
      creationRules: DefaultValue.CreationRules
    }
  };
}

function testGameStateSanity(state: IGameState): boolean {
  return true;
}

module.exports = {
  loadLastGameState,
  getGameState
};
