import { Request, Response } from 'express';

import * as mapService from '../../services/game-data/map.service';

const generateBySeed = async (req: Request, res: Response) => {
  const data = await mapService.generateMap(req);

  res.status(data.statusCode).json(data.body);
};

const useMap = async (req: Request, res: Response) => {
  const data = await mapService.useMap(req);

  res.status(data.statusCode).json(data.body);
};

export { generateBySeed, useMap };
