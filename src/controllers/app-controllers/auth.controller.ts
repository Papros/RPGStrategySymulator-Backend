import { Request, Response } from 'express';
import * as authService from '../../services/auth/auth.service';

const signingHandler = (req: Request, res: Response) => {
  authService;
};

const logoutHandler = (req: Request, res: Response) => {
  authService.logout(req, res);
};

export { signingHandler, logoutHandler };
