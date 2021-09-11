import express from 'express';
import * as functions from 'firebase-functions';
import cors from 'cors';

import * as Food from '../controllers/food';

const router = express();

router.use(cors());

router.get('/foods', async (req, res) => {
  const foods = await Food.GetAll();

  res.json({
    foods
  });
});

export default functions.https.onRequest(router);
