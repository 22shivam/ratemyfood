import express from 'express';
import * as functions from "firebase-functions";
import cors from 'cors';

import * as Food from '../controllers/food';
import * as Review from '../controllers/review';

const router = express();

router.use(cors());

router.post('/food', async (req, res) => {
  try {
    const food = await Food.Create({
      name: req.body.name,
      images: req.body.images,
      description: req.body.description,
      reviews: [],
      cost: req.body.cost,
      eateryId: req.body.eateryId
    });

    res.json({
      food
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

router.get('/food/:id', async (req, res) => {
  const food = await Food.FindOne(req.params.id);

  res.json({
    food
  });
});

router.get('/food/:id/reviews', async (req, res) => {
  var reviews = await Review.Find({
    foodId: req.params.id

  });

  reviews = reviews.reverse();

  res.send({
    reviews
  });
});

export default functions.https.onRequest(router);
