import express from 'express';
import { register, login, verifyPasswordChange } from '../controllers/authController.js';
import { upload } from '../middleware/uploadMiddleware.js';


const router = express.Router();

router.post('/register', upload.single('profile_picture'), register);
router.get('/verify/:token', verifyEmail);
router.post('/login', login);
router.post('/verify-password-change/:token', verifyPasswordChange);



export default router;
