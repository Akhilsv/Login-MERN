import './config.js';
import express from 'express';
import authRoutes from './routes/route.js';
import connectDB from './config/db.js';
import privateRoute from './routes/private.js';
import cors from 'cors'

connectDB();
const app = express();
app.use(cors())

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', privateRoute);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
	console.log(`Server is running at ${PORT}`),
);

process.on('unhandledRejection', (err, promise) => {
	console.log(`Logged error: ${err}`);
	server.close(() => process.exit(1));
});
