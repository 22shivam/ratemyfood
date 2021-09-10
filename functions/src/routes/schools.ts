import express from 'express';
import * as functions from "firebase-functions";
import { GetAll } from '../controllers/school';
import cors from 'cors';

var router = express();

router.use(cors());

router.get('/schools', async (req, res) => {
  const schools = await GetAll();

  res.json({
    schools
  });
});

export default functions.https.onRequest(router);
