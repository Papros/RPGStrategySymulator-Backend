import { ResourceType, TerrainType } from "../../model/game-model/enums/index";
import { District, Kingdom } from "@app/model/game-model/world";

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
        let terrainCode = Math.floor(Math.random()*3);
        let terrainType = TerrainType.FIELDS;
        switch(terrainCode) {
            case 0: terrainType = TerrainType.FIELDS; break;
            case 1: terrainType = TerrainType.SEA; break;
            case 2: terrainType = TerrainType.FOREST; break;
        }
        let resourceType = ResourceType.NOTHING;
        map.push(generateDistrict(`${id}`, width, hight, terrainType, resourceType));
      }
    }

    return map;
}

export { generateMap, setKingdomsOnMap };