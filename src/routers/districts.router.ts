import express from 'express'

import * as districtsController from '../controllers/districts.controller'

const router = express.Router()

/* GET districts */
router.get('/', districtsController.getAll)

/* GET districts by id */
router.get('/:id', districtsController.getById)

export { router as default }