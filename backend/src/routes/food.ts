import express from 'express';

import { GetAll, Create, Find } from '../controllers/food';

const router = express.Router();

router.get('/foods', async (req, res) => {
  const foods = await GetAll();

  res.json({
    foods
  });
});

router.post('/food', async (req, res) => {
  try {
    const food = await Create({
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

router.get('/eatery/:id/foods', async (req, res) => {
  const foods = await Find({
    eateryId: req.params.id
  });

  res.json({
    foods
  });
});

export default router;
