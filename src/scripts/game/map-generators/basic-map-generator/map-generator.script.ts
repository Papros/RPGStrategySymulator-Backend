import { DefaultValue } from '../../../../types/game-model/default-value';
import { ICreationRules } from '../../../../types/game-model/world/creation-rules';
import { IDistrict } from '../../../../types/game-model/world/district';
import { IKingdom } from '../../../../types/game-model/world/kingdom';
import { IResourceSource } from '../../../../types/game-model/world/resource-source';
import { ITerrainState } from '../../../../types/game-model/world/terrain-state';
import { IMapGenerator } from '../interface/map-generator.interface';

export class BasicMapGenerator implements IMapGenerator {
  constructor() {}

  public generateMap(rules: ICreationRules): IDistrict[] {
    let map: IDistrict[] = this.emptyMap(rules.size);
    return map;
  }

  public setKingdomsOnMap(map: IDistrict[], kingdoms: IKingdom[]): IDistrict[] {
    let mapWithKingdoms = this.placeKingdomsRandomly(map, kingdoms);

    while (!this.testMap(mapWithKingdoms)) {
      mapWithKingdoms = this.placeKingdomsRandomly(map, kingdoms);
    }

    return map;
  }

  private placeKingdomsRandomly(map: IDistrict[], kingdoms: IKingdom[]): IDistrict[] {
    for (let kingdom of kingdoms) {
      let playerSet = false;

      while (!playerSet) {
        let districtId = this.placeKingdomRandomly(map);
        if (map[districtId].kingdomID == '0') {
          map[districtId].kingdomID = kingdom.id;
          playerSet = true;
        }
      }
    }
    return map;
  }

  private placeKingdomRandomly(map: IDistrict[]): number {
    let randomDistrict = Math.floor(Math.random() * (map.length - 1));
    return randomDistrict;
  }

  private testMap(map: IDistrict[]): boolean {
    return true;
  }

  private generateDistrict(id: string, x: number, y: number, terrain: ITerrainState, resource: IResourceSource[]): IDistrict {
    return {
      id: id,
      kingdomID: '0',
      position: { x: x, y: y },
      terrain: terrain,
      resources: resource
    };
  }

  private emptyMap(size: { x: number; y: number }): IDistrict[] {
    let map: Array<IDistrict> = new Array<IDistrict>();
    let id = 0;

    for (let hight = 0; hight < size.y; hight++) {
      for (let width = 0; width < size.x; width++) {
        id++;
        let terrainState = DefaultValue.TerrainState;
        let resources = [DefaultValue.ResourceSource];
        map.push(this.generateDistrict(`${id}`, width, hight, terrainState, resources));
      }
    }

    return map;
  }
}
