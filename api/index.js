//////////ES6////////////////
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './main.router.js';
// import redisClient from './config/redis.config.js';
import path from 'path';
import connectDB from './config/db.js';

const PORT = 2000;
const app = express();
const __dirname = import.meta.dirname; //node 20.11 - v22

connectDB();

// redisClient.connect().catch(console.error);
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/api', (req, res) => {
  res.send('My API');
});

app.listen(PORT, async () => {
  console.log(`Server running on Port: ${PORT}`);
});

