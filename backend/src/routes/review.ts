import express from 'express';

import { GetAll, Create } from '../controllers/review'

const router = express.Router();

router.get('/reviews', async (req, res) => {
  const reviews = await GetAll();

  res.json({ 
    reviews
  });
});

router.post('/review', async (req, res) => {
  try {
    const review = await Create({
      rating: req.body.rating,
      comment: req.body.comment,
      foodId: req.body.foodId,
      author: req.body.author
    });

    res.json({
      review
    });  
  } catch(e: any) {
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

export default router;
