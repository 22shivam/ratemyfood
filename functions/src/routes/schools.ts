import express from 'express';
import * as functions from "firebase-functions";
import { GetAll } from '../controllers/school';

var router = express();

router.get('/', async (req, res) => {
  const schools = await GetAll();

  res.json({
    schools
  });
});

export default functions.https.onRequest(router);
