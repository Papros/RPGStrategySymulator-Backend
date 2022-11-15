import express from 'express'

import * as mapController from '../controllers/map.controller';

const router = express.Router()

/* GET districts by id */
router.get('/new-map/:seed', mapController.getRandomMap)
router.get('/', mapController.getMap)

export { router as default }