import { Router } from 'express';
import { userRouter } from './routers/user.router.js';

const router = Router();

router.get('/', (req, res) => {
  res.send(`API for Mongoose CRUD`);
});

router.use('/users', userRouter)
// add another router here ...

export default router;
