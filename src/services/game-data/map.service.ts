import { generateMap, setKingdomsOnMap } from "../../scripts/game";
import { District, GameMap } from "@app/model/game-model";
import { ServiceAPIResponse } from "@app/model/server";
import { Request } from "express";

var stateManager = require('../common/game-state.service');

const generateRandomMap = async (req: Request): Promise<ServiceAPIResponse<GameMap>> => {
    let map = generateMap({x: 10, y: 10});

    return {
        statusCode: 200,
        body: {
            id: '0',
            info: "test",
            seed: 0,
            map: map,
            kingdoms: [],
        },
      }
}

const getMap = async (req: Request): Promise<ServiceAPIResponse<GameMap>> => {
    let districts:District[] = stateManager.getGameState().map;

    return {
        statusCode: 200,
        body: {
            id: '0',
            info: "test",
            seed: 0,
            map: districts,
            kingdoms: [],
        },
      }
}

export { generateRandomMap, getMap };
