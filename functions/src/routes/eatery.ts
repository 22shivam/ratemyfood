import express from 'express';
import * as functions from "firebase-functions";
import cors from 'cors';

import * as Eatery from '../controllers/eatery';
import * as Food from '../controllers/food';

var router = express();

router.use(cors());

router.post('/eatery', async (req, res) => {
  try {
    const eatery = await Eatery.Create({
      name: req.body.name,
      location: req.body.location,
      description: req.body.description,
      isFoodcourt: req.body.isFoodcourt,
      schoolId: req.body.schoolId,
      rating: req.body.rating
    });

    res.json({
      eatery
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

router.get('/eatery/:id', async (req, res) => {
  const eatery = await Eatery.FindOne(req.params.id);

  res.json({
    eatery
  })
});

router.get('/eatery/:id/foods', async (req, res) => {
  const foods = await Food.Find({
    eateryId: req.params.id
  });

  res.json({
    foods
  });
});

router.get('/eatery/:id/foods/search', async (req, res) => {
  try {
    const results = await Food.Search(req.query.query);

    res.json({
      results
    });
  } catch(e) {
    res.status(500).json({
      "err": true,
      "msg": "An Internal Server error occurred"
    });
  }
});

export default functions.https.onRequest(router);
