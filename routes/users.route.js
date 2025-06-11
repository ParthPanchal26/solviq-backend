import express from 'express';
import { register, login, logout } from '../controllers/users.controller.js';

const router = express.Router();

router.post('/sign-up', register)

router.post('/sign-in', login);

router.get('/logout', logout);

export default router;