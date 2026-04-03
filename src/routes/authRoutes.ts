import { Router } from 'express';
import { validateBody } from '../middleware/validation.ts';
import { login, register } from '../controllers/authController.ts';
import { insertUserSchema } from '../db/schema.ts';
import { z }from 'zod';

const loginSchema = z.object({
    email: z.email("Invalid email"),
    password: z.string().min(1, 'Password is required')
})

const router = Router();

// Auth Routes
router.post('/register', validateBody(insertUserSchema), register);
router.get('/login', validateBody(loginSchema), login);

export default router;