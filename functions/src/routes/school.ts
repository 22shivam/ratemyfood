import express from 'express';
import * as functions from "firebase-functions";
import cors from 'cors';

import * as School from '../controllers/school';
import * as Eatery from '../controllers/eatery';
import * as Food from '../controllers/food';

var router = express();

router.use(cors());

// router.get('/schools', async (req, res) => {
//   const schools = await GetAll();

//   res.json({
//     schools
//   });
// });



router.post('/school', async (req, res) => {
  try {
    const school = await School.Create({
      name: req.body.name,
      location: req.body.location
    });

    res.json({
      school
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

router.get('/school/search', async (req, res) => {
  try {
    const results = await School.Search(req.query.query);

    res.json({
      results
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      "err": true,
      "msg": "An Internal Server error occurred"
    });
  }
});

router.get('/school/:id/eateries/search', async (req, res) => {
  const results = await Eatery.Search(req.query.query);

  res.json({
    results
  });
});

router.get('/school/:id/eateries', async (req, res) => {
  const eateries = await Eatery.Find({
    schoolId: req.params.id
  });

  res.json({
    eateries
  });
});

router.get('/school/:id/foods/search', async (req, res) => {
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
