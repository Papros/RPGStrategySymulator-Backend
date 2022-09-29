import express, { Express, Request, Response } from 'express';
import cors from 'cors'

import * as middleware from './middleware'
import districtsRouter from './routers/districts.router';
import kingdomssRouter from './routers/kingdoms.router';

var stateManager = require('../src/services/common/game-state-manager');

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'production'

const app: Express = express()

stateManager.loadLastGameState();
app.use(cors())
app.use(express.json())
app.use(middleware.errorHandler)
//app.use(middleware.notFoundHandler)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/district', districtsRouter);
app.use('/districts', districtsRouter);
app.use('/kingdom', kingdomssRouter);
app.use('/kingdoms', kingdomssRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running on port ${PORT} (${ENV} enviroment)`);
});