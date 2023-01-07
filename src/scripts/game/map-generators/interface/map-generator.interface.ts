import { ICreationRules } from '../../../../types/game-model/world/creation-rules';
import { IDistrict } from '../../../../types/game-model/world/district';
import { IKingdom } from '../../../../types/game-model/world/kingdom';

export interface IMapGenerator {
  generateMap(rules: ICreationRules): IDistrict[];
  setKingdomsOnMap(map: IDistrict[], kingdoms: IKingdom[]): IDistrict[];
}
