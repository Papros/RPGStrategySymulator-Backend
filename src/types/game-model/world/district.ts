import { IResourceSource } from './resource-source';
import { ITerrainState } from './terrain-state';

export interface IDistrict {
  id: string;
  kingdomID: string;
  terrain: ITerrainState;
  resources: IResourceSource[];
  position: { x: number; y: number };
}
