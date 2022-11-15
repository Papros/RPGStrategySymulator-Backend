import { District } from "../world/district";
import { Kingdom } from "../world/kingdom";

export interface GameState {
    map: District[];
    pureMap: District[];
    kingdoms: Kingdom[];
}