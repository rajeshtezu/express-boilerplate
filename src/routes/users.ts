import { Request, Response, NextFunction, Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  res.send('Users APIs..., something awesome is coming...');
});

export default router;
