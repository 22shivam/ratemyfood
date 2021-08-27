import express from "express";
import mongoose from "mongoose";

const app = express();

async function run(): Promise<void> {
  await mongoose.connect('mongodb+srv://ratemyfoodadmin:YNvYjNoPe3KS3p7i@ratemyfood.jud4q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {

  });
  app.listen(3000, "Server is live");
}

run().catch(err => console.log(err));


