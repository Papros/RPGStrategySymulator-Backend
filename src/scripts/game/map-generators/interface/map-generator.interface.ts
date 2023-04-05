import { ICreationRules } from '../../../../types/game-model/world/creation-rules.interface';
import { IDistrict } from '../../../../types/game-model/world/district.interface';
import { IKingdom } from '../../../../types/game-model/world/kingdom.interface';

export interface IMapGenerator {
  generateMap(rules: ICreationRules): IDistrict[];
  setKingdomsOnMap(map: IDistrict[], kingdoms: IKingdom[]): IDistrict[];
}
