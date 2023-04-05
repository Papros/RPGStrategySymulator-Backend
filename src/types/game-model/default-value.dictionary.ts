import { IGameState } from './complex/game-object.interface';
import { ResourceType } from './enums/resource.enum';
import { TerrainType } from './enums/terrain.enum';
import { IBuilding } from './world/building.interface';
import { CreationRulesAmountValue, CreationRulesSizeValue, ICreationRules } from './world/creation-rules.interface';
import { IDistrict } from './world/district.interface';
import { IKingdom } from './world/kingdom.interface';
import { ILord } from './world/lord.interface';
import { IParty } from './world/party.interface';
import { IResourceSource } from './world/resource-source.interface';
import { ITerrainState } from './world/terrain-state.interface';
import { IUnit } from './world/unit.interface';

export class DefaultValue {
  static CreationRules: ICreationRules = {
    seed: 0,
    size: { x: 20, y: 20 },
    setIslands: CreationRulesAmountValue.SOME,
    resources: CreationRulesAmountValue.SOME,
    biomesSize: CreationRulesSizeValue.MEDIUM,
    allowedResources: [
      ResourceType.FOOD,
      ResourceType.GOLD,
      ResourceType.HORSES,
      ResourceType.IRON,
      ResourceType.SCIENCE,
      ResourceType.WOOD
    ],
    allowedTerrain: [
      TerrainType.DESERT,
      TerrainType.FIELDS,
      TerrainType.FOREST,
      TerrainType.JUNGLE,
      TerrainType.MOUNTAINS,
      TerrainType.SNOW
    ],
    noiseValues: {
      amplitude: 4,
      octaves: 0.5
    }
  };

  static ResourceSource: IResourceSource = {
    id: '',
    type: ResourceType.NOTHING,
    isInfinite: false,
    amount: 0,
    productionSpeed: 0
  };

  static TerrainState: ITerrainState = {
    type: TerrainType.FIELDS
  };

  static Lord: ILord = {
    id: '',
    name: ''
  };

  static Kingdom: IKingdom = {
    id: '',
    name: '',
    partyID: ''
  };

  static District: IDistrict = {
    id: '',
    terrain: DefaultValue.TerrainState,
    resources: [DefaultValue.ResourceSource],
    position: { x: 0, y: 0 },
    owner: {
      partyID: '',
      kingdomID: ''
    },
    city: {
      population: 0,
      buildings: []
    }
  };

  static Unit: IUnit = {
    id: '',
    locationID: '',
    kingdomId: '',
    abilities: {
      defense: 0,
      range: 0,
      melee: 0,
      speed: 0
    },
    modifiers: {
      defense: 0,
      range: 0,
      melee: 0,
      speed: 0
    }
  };

  static Party: IParty = {
    id: '',
    name: ''
  };

  static Building: IBuilding = {};

  static gameState: IGameState = {
    map: [],
    kingdoms: [],
    general: {
      pureMap: [],
      creationRules: DefaultValue.CreationRules
    }
  };
}
