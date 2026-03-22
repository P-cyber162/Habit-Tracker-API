import express from 'express';
import authRoutes from './routes/authRoutes.ts';
import habitRoutes from './routes/habitRoutes.ts'
import userRoutes from './routes/userRoutes.ts';

const app = express();

app.get('/health', (req, res) => {
    res.send('<button>Click<button>');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/habit', habitRoutes);

export {app};

export default app;