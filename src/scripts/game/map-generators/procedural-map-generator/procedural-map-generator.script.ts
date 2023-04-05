import { DefaultValue } from '../../../../types/game-model/default-value.dictionary';
import { ResourceType } from '../../../../types/game-model/enums/resource.enum';
import { TerrainType } from '../../../../types/game-model/enums/terrain.enum';
import { ICreationRules } from '../../../../types/game-model/world/creation-rules.interface';
import { IDistrict } from '../../../../types/game-model/world/district.interface';
import { IKingdom } from '../../../../types/game-model/world/kingdom.interface';
import { IResourceSource } from '../../../../types/game-model/world/resource-source.interface';
import { ITerrainState } from '../../../../types/game-model/world/terrain-state.interface';
import { IMapGenerator } from '../interface/map-generator.interface';
import { createNoise2D, NoiseFunction2D } from 'simplex-noise';
import Alea from 'alea';

var PerlinGenerator = require('proc-noise');

export class ProceduralMapGenerator implements IMapGenerator {
  constructor() {}

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
        if (map[districtId].owner.kingdomID == '0' && map[districtId].terrain.type != TerrainType.SEA) {
          map[districtId].owner.kingdomID = kingdom.id;
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

  public generateMap(rules: ICreationRules): IDistrict[] {
    const noise2D = createNoise2D(Alea(rules.seed));

    let map: IDistrict[] = this.emptyMap(rules, noise2D);
    return map;
  }

  private emptyMap(rules: ICreationRules, noise: NoiseFunction2D): IDistrict[] {
    let map: Array<IDistrict> = new Array<IDistrict>();
    let id = 0;

    var Perlin = new PerlinGenerator(rules.seed);
    Perlin.noiseDetail(4, 0.5);

    const size = rules.size;

    for (let hight = 0; hight < size.y; hight++) {
      for (let width = 0; width < size.x; width++) {
        id++;
        //const noiseValueXY = noise(width, hight);
        const noiseValueXY = Perlin.noise(width, hight);

        const newDistrict = {
          id: `${id}`,
          position: { x: width, y: hight },
          terrain: this.getTerrain(rules, noiseValueXY),
          resources: this.getResource(rules, noiseValueXY),
          owner: {
            kingdomID: '0',
            partyID: '0'
          },
          city: {
            population: 1,
            buildings: []
          }
        };

        map.push(newDistrict);
      }
    }

    return map;
  }

  private getTerrain(rules: ICreationRules, noise: number): ITerrainState {
    let terrain = TerrainType.FIELDS;

    if (noise < 0.5) {
      terrain = TerrainType.SEA;
    } else {
      terrain = TerrainType.FIELDS;
    }

    return {
      type: terrain
    };
  }

  private getResource(rules: ICreationRules, noise: number): IResourceSource[] {
    let type = ResourceType.NOTHING;

    if (noise % 2 === 0) {
      type = ResourceType.NOTHING;
    } else {
      type = ResourceType.NOTHING;
    }

    return [
      {
        id: '0',
        type,
        isInfinite: false,
        amount: noise,
        productionSpeed: noise % 10
      }
    ];
  }
}
