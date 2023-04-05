import express, { Express, Request, Response } from 'express';
import cors from 'cors';

import * as middleware from './middleware';
import districtsRouter from './routers/games-routers/districts.router';
import kingdomsRouter from './routers/games-routers/kingdoms.router';
import mapRouter from './routers/games-routers/map.router';
const bodyParser = require('body-parser');

var stateManager = require('../src/services/common/game-state-manager');

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'production';

const app: Express = express();

stateManager.loadLastGameState();
app.use(cors());
app.use(bodyParser.json());
app.use(middleware.errorHandler);
//app.use(middleware.notFoundHandler)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/district', districtsRouter);
app.use('/districts', districtsRouter);

app.use('/kingdom', kingdomsRouter);
app.use('/kingdoms', kingdomsRouter);

/* GET districts by id */
app.get('/reset', stateManager.loadLastGameState);

app.use('/map', mapRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running on port ${PORT} (${ENV} enviroment)`);
});
