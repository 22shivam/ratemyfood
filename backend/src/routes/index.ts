import express from 'express';
import review from './review';
import food from './food';

var router = express.Router();

router.use('/reviews', review);
router.use('/food', food);

export default router;
