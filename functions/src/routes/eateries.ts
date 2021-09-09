import express from 'express';
import * as functions from "firebase-functions";

import * as Eatery from '../controllers/eatery';

var router = express();

router.get('/', async (req, res) => {
  const eateries = await Eatery.GetAll();

  res.json({
    eateries
  });
});

export default functions.https.onRequest(router);
