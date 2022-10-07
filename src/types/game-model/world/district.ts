import { ResourceType } from "../enums/resource.enum";
import { TerrainType } from "../enums/terrain.enum";

export interface District {
    id: string;
    kingdomID: string;
    terrain: {
        type: TerrainType,
    },
    resource: {
        type: ResourceType,
    }
    position: { x: number, y: number}; 
}
