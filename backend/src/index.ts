import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import routes from './routes';
import cors from 'cors';

dotenv.config();

const app = express();
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options)); 

async function run(): Promise<void> {
  console.log('Connecting to DB...');
  await mongoose.connect(<string>process.env.DBURL, {

  });
  console.log('Connected to DB');
  app.use(cors());
  app.use(express.json());
  app.use('/api', routes);
  app.listen(process.env.PORT);
  console.log('Backend is running! Port: ', process.env.PORT);
}

run().catch(err => console.log(err));


