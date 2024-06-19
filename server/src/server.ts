import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import f1Routes from './routes/f1Routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/f1', f1Routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
