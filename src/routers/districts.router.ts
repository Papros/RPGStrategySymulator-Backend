import express from 'express'

import * as districtsController from '../controllers/districts.controller'

const router = express.Router()

/* GET districts */
router.get('/', districtsController.getAllDistricts)

/* GET districts by id */
router.get('/:id', districtsController.getDistrictById)


export { router as default }