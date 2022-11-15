import { District, Kingdom } from "../world";

export interface GameMap {
    id: string;
    info: string;
    seed: number;
    map: District[];
    kingdoms: Kingdom[];
}