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

function generateDistrict(id: string, x: number, y: number): District {
    return {
        id: id,
        kingdomID: '0',
        position: { x:x, y:y},
    }
}

function emptyMap(size: {x: number, y: number}): District[] {
    let map: Array<District> = new Array<District>();

    for(let width = 0; width < size.x; width++) {
        for(let hight = 0; hight < size.y; hight++) {
            map.push(generateDistrict(`${width*hight+1}`, width, hight));
        }
    }

    return map;
}

export { generateMap, setKingdomsOnMap };