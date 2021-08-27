import express from 'express';
import review from './review';
import food from './food';

var router = express.Router();

var routes = [
    review,
    food
];

routes.forEach(route => {
    router.use('/', route);
});

export default router;
