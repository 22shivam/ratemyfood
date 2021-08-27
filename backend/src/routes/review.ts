import express from 'express';

import GetAll from '../controllers/review/get-all';
import Create from '../controllers/review/create';

const router = express.Router();

router.get('/', async (req, res) => {
  const reviews = await GetAll();

  res.json(reviews);
});

router.post('/', async (req, res) => {
  const review = await Create({
      rating: req.body.rating,
      comment: req.body.comment,
      foodId: req.body.foodId
  });

  res.json(review);
});

export default router;
