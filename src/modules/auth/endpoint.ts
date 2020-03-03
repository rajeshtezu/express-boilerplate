import * as express from 'express';
const router = express.Router();

router.post('/login', (req, res, next) => {
    console.log('>>>>>>>', req);

    res.json({ authenticated: true });
});
