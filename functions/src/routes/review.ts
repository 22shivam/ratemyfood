import express from 'express';
import * as functions from 'firebase-functions';
import cors from 'cors';

import * as Review from '../controllers/review';

const router = express();

router.use(cors());

router.options('*', cors);
router.post('/review', async (req, res) => {
  try {
    const review = await Review.Create({
      rating: req.body.rating,
      comment: req.body.comment,
      foodId: req.body.foodId,
      author: req.body.author
    });

    res.json({
      review
    });
  } catch(e) {
    if(e.options && e.options.fieldMissing) {
      res.status(400).json({
        err: true,
        msg: e.message,
        fields: e.options.fields
      })
    } else {
      res.status(500).json({
        "err": true,
        "msg": "An Internal Server error occurred"
      });
    }
  }
});

export default functions.https.onRequest(router);
