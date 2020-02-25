import { Request, Response, NextFunction, Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  res.send('Users APIs...');
});

export default router;
