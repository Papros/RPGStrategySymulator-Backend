import { IBuilding } from './building.interface';
import { IResourceSource } from './resource-source.interface';
import { ITerrainState } from './terrain-state.interface';

export interface IDistrict {
  id: string;
  owner: {
    partyID: string;
    kingdomID: string;
  };
  terrain: ITerrainState;
  resources: IResourceSource[];
  position: { x: number; y: number };
  city: {
    population: number;
    buildings: IBuilding[];
  };
}
