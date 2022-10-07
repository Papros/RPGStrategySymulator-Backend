import { ResourceType } from '../../types/game-model/enums/resource.enum';
import { TerrainType } from '../../types/game-model/enums/terrain.enum';
import { District } from '../../types/game-model/world/district';
import { Kingdom } from '../../types/game-model/world/kingdom';

function generateMap(size: {x: number, y: number}): District[] {

    let map: District[] = emptyMap(size);
    return map;
}

function setKingdomsOnMap(map: District[], kingdoms: Kingdom[]): District[] {

    let mapWithKingdoms = placeKingdomsRandomly(map, kingdoms);

    while(!testMap(mapWithKingdoms)) {
        mapWithKingdoms = placeKingdomsRandomly(map, kingdoms);
    }

    return map;
}

function placeKingdomsRandomly(map: District[], kingdoms:Kingdom[]): District[] {
    for(let kingdom of kingdoms) {
        let playerSet = false;

        while(!playerSet) {
            let districtId = placeKingdomRandomly(map);
            if(map[districtId].kingdomID == '0') {
                map[districtId].kingdomID = kingdom.id; 
                playerSet = true;  
            } 
        }
    }
    return map;
}

function placeKingdomRandomly(map: District[]): number {
    let randomDistrict = Math.floor(Math.random() * (map.length -1));
    return randomDistrict;
}

function testMap(map: District[]): boolean {
    return true;
}

function generateDistrict(id: string, x: number, y: number, terrain: TerrainType, resource: ResourceType): District {
    return {
        id: id,
        kingdomID: '0',
        position: { x:x, y:y},
        terrain: {
            type: terrain,
        },
        resource: {
            type: resource,
        }
    }
}

function emptyMap(size: {x: number, y: number}): District[] {
    let map: Array<District> = new Array<District>();
    let id = 0;

    for(let hight = 0; hight < size.y; hight++) {
      for(let width = 0; width < size.x; width++) {
        id++;
        let terrainType = TerrainType.FIELDS;
        let resourceType = ResourceType.NOTHING;
        map.push(generateDistrict(`${id}`, width, hight, terrainType, resourceType));
      }
    }

    return map;
}

export { generateMap, setKingdomsOnMap };