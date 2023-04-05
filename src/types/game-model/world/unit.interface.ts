export interface IUnit {
  id: string; // Unit id
  locationID: string; // District ID
  kingdomId: string; // Kingdom ID
  abilities: {
    defense: number;
    range: number;
    melee: number;
    speed: number;
  };
  modifiers: {
    defense: number;
    range: number;
    melee: number;
    speed: number;
  };
}
