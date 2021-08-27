import express from 'express';
import review from './review';
import food from './food';
import school from './school';
import eatery from './eatery';

var router = express.Router();

var routes = [
    review,
    food,
    school,
    eatery
];

routes.forEach(route => {
    router.use('/', route);
});

export default router;
