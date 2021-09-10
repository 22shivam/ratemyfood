import * as functions from "firebase-functions";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { School, Schools, Eatery, Eateries, Food, Foods, Review, Reviews } from './routes';

dotenv.config();

console.error(functions.config());

async function connect(): Promise<void> {
  await mongoose.connect(<string>functions.config().mongoose.uri, {

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
  Review,
  Reviews
};
