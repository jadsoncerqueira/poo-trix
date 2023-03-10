// src/Routes/Routes.ts

import { Router } from 'express';
import TransferController from '../Controllers/TransferController';

const routes = Router();

routes.post(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).create(),
);

routes.get(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).findTransfers(),
);

routes.get(
  '/key/:key',
  (req, res, next) => new TransferController(req, res, next).findTransfer(),
);

export default routes;