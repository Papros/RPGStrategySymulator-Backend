import { IDistrict } from '../world/district';
import { IKingdom } from '../world/kingdom';

export interface GameState {
  map: IDistrict[];
  pureMap: IDistrict[];
  kingdoms: IKingdom[];
}
