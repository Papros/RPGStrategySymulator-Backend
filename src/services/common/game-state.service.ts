import { generateMap, setKingdomsOnMap } from './../../scripts/game/map-generator.script';
import { GameState } from "@app/model/game-model/complex";

var logger = require('../other/logger.service');

let gameState: GameState = {
    map: [],
    pureMap: [],
    kingdoms: [],
}

function loadLastGameState(): boolean {
    let map  = generateMap({x:10, y:10});
    logger.log("Loading map...", "gameStateManager");
    gameState.pureMap = map;
    gameState.kingdoms = [{id:'1', name: "Polska"}, {id:'2', name: "Niemcy"}, {id:'3', name: "Francja"}, {id:'4', name: "Włochy"}, {id:'5', name: "Hiszpania"},
    {id:'6', name: "Austria"},{id:'7', name: "Grecja"},{id:'8', name: "Belgia"}];
    gameState.map = setKingdomsOnMap(map, gameState.kingdoms);

    return true;
}

function getGameState(): GameState {
    return gameState;
}

function saveGameStateInFile(): boolean {
    return true;
}

function loadGameStateFromFile(): GameState {
    return {
        map: [],
        pureMap: [],
        kingdoms: []
    }
}

function testGameStateSanity(state: GameState): boolean {
    return true;
}

module.exports = {
    loadLastGameState,
    getGameState,
}