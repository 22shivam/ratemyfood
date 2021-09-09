import express from 'express';
import * as functions from 'firebase-functions';

import * as Food from '../controllers/food';

const router = express();

router.get('/', async (req, res) => {
  const foods = await Food.GetAll();

  res.json({
    foods
  });
});

export default functions.https.onRequest(router);
