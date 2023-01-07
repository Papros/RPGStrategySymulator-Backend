import { ResourceType } from '../enums/resource.enum';
import { TerrainType } from '../enums/terrain.enum';

export interface ICreationRules {
  seed: number | string;
  size: { x: number; y: number };
  setIslands: CreationRulesAmountValue;
  resources: CreationRulesAmountValue;
  biomesSize: CreationRulesSizeValue;
  allowedResources: ResourceType[];
  allowedTerrain: TerrainType[];
  noiseValues: { amplitude: number; octaves: number };
}

export enum CreationRulesSizeValue {
  SMALL = '0',
  MEDIUM = '1',
  BIGGER = '2',
  LARGE = '3',
  X_LARGE = '4'
}

export enum CreationRulesAmountValue {
  NONE = '0',
  SOME = '1',
  MODERATELY = '2',
  MANY = '3',
  NUMEROUSLY = '4'
}
