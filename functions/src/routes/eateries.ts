import express from 'express';
import * as functions from "firebase-functions";
import cors from 'cors';

import * as Eatery from '../controllers/eatery';

var router = express();

router.use(cors());

router.get('/eateries', async (req, res) => {
  const eateries = await Eatery.GetAll();

  res.json({
    eateries
  });
});

export default functions.https.onRequest(router);
