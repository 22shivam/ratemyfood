import express from 'express';
import * as functions from 'firebase-functions';
import cors from 'cors';

import * as Review from '../controllers/review';

const router = express();

router.use(cors());

router.get('/reviews', async (req, res) => {
    const reviews = await Review.GetAll();

    res.json({
      reviews
    });
  });


export default functions.https.onRequest(router);
