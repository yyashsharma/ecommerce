import express from 'express'
import { deleteUser, getuser, getusers, signout, test, updateUser } from '../controllers/user.controllers.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test)



router.put('/update/:userId', verifyToken, updateUser)

router.delete('/delete/:userId', verifyToken, deleteUser)

router.get('/getusers', verifyToken, getusers)

router.get('/:userId', getuser)





export default router;