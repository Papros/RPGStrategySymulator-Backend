import express from 'express';

import * as kingdomsController from '../controllers/kingdoms.controller';

const router = express.Router();

/* GET districts */
router.get('/', kingdomsController.getAll);

/* GET districts by id */
router.get('/:id', kingdomsController.getById);

export { router as default };
