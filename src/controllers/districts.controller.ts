import { Request, Response } from 'express'


import * as districtsService from '../services/game-data/districts.service'

const getAllDistricts = async (req: Request, res: Response) => {
  try {
    const data = await districtsService.getAllDistricts()

    res.status(data.statusCode).send(data.body)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
}

const getDistrictById = async (req: Request, res: Response) => {
  const data = await districtsService.getDistrictById(req)

  res.status(data.statusCode).json(data.body)
}

export { getAllDistricts, getDistrictById }