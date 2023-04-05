import { ICreationRules } from '../world/creation-rules.interface';
import { IDistrict } from '../world/district.interface';
import { IKingdom } from '../world/kingdom.interface';

export interface IGameState {
  map: IDistrict[];
  kingdoms: IKingdom[];
  general: {
    pureMap: IDistrict[];
    creationRules: ICreationRules;
  };
}
