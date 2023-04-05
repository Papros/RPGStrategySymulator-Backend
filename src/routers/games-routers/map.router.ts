import express from 'express';

import * as mapController from '../../controllers/game-controllers/map.controller';

const router = express.Router();

router.post('/generate', mapController.generateBySeed);

export { router as default };
