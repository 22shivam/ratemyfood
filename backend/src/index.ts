import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();

async function run(): Promise<void> {
  console.log('Connecting to DB...');
  await mongoose.connect('mongodb+srv://ratemyfoodadmin:YNvYjNoPe3KS3p7i@ratemyfood.jud4q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {

  });
  console.log('Connected to DB');
  app.use(express.json())
  app.use('/api', routes);
  app.listen(process.env.PORT);
  console.log('Backend is running! Port: ', process.env.PORT);
}

run().catch(err => console.log(err));


