import express from 'express';

import * as mapController from '../controllers/map.controller';

const router = express.Router();

router.post('/generate', mapController.generateBySeed);

export { router as default };
