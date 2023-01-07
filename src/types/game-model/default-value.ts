import { ResourceType } from './enums/resource.enum';
import { TerrainType } from './enums/terrain.enum';
import { CreationRulesAmountValue, CreationRulesSizeValue, ICreationRules } from './world/creation-rules';
import { IDistrict } from './world/district';
import { IKingdom } from './world/kingdom';
import { ILord } from './world/lord';
import { IResourceSource } from './world/resource-source';
import { ITerrainState } from './world/terrain-state';

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
    id: '0',
    type: ResourceType.NOTHING,
    isInfinite: false,
    amount: 0,
    productionSpeed: 0
  };

  static TerrainState: ITerrainState = {
    type: TerrainType.FIELDS
  };

  static Lord: ILord = {
    id: '0',
    name: 'Lord'
  };

  static Kingdom: IKingdom = {
    id: '0',
    name: 'Kingdom'
  };

  static District: IDistrict = {
    id: '0',
    kingdomID: '0',
    terrain: DefaultValue.TerrainState,
    resources: [DefaultValue.ResourceSource],
    position: { x: 0, y: 0 }
  };
}
