import express from 'express'

import * as kingdomsController from '../controllers/kingdoms.controller'

const router = express.Router()

/* GET districts */
router.get('/', kingdomsController.getAllKingdoms)

/* GET districts by id */
router.get('/:id', kingdomsController.getKingdomById)

export { router as default }