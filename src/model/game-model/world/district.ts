import { TerrainType, ResourceType } from "../enums";

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
