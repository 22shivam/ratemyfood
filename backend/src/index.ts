import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import routes from './routes';
import cors from 'cors';

dotenv.config();

const app = express();
const allowedOrigins = ['http://localhost:3000', 'https://ratemyfood.vercel.app'];

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
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
  //   next();
  // });
  app.options('*', cors);
  app.use(express.json());
  app.use('/api', routes);
  app.get('/', (req, res) => {
    res.send('API server is running');
  });
  app.listen(process.env.PORT);
  console.log('Backend is running! Port: ', process.env.PORT);
}

run().catch(err => console.log(err));


