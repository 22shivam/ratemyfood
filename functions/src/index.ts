import * as functions from "firebase-functions";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { School, Schools, Eatery, Eateries, Food, Foods, Review } from './routes';

dotenv.config();

async function connect(): Promise<void> {
  await mongoose.connect(<string>process.env.DBURL, {

  });
}

connect().catch(err => console.log(err));

export {
  School,
  Schools,
  Eatery,
  Eateries,
  Food,
  Foods,
  Review
};