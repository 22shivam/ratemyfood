import express from 'express';

import GetAll from '../controllers/food/get-all';
import Create from '../controllers/food/create';

const router = express.Router();

router.get('/', async (req, res) => {
  const foods = await GetAll();

  res.json(foods);
});

router.post('/', async (req, res) => {
  const food = await Create({
    name: req.body.name,
    images: req.body.images,
    description: req.body.description,
    reviews: [],
    cost: req.body.cost,
    restrauntId: req.body.restrauntId
  });

  res.json(food);
});

export default router;
