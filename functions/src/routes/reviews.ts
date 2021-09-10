import express from 'express';
import * as functions from 'firebase-functions';

import * as Review from '../controllers/review';

const router = express();

router.get('/reviews', async (req, res) => {
    const reviews = await Review.GetAll();

    res.json({
      reviews
    });
  });


export default functions.https.onRequest(router);
