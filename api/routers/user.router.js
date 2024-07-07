import { Router } from 'express'
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/', createUser)
userRouter.get('/', getAllUsers)
userRouter.get('/:userId', getUserById)
userRouter.patch('/:userId', updateUser)
userRouter.delete('/:userId', deleteUser)

export { userRouter }