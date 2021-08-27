import express from 'express';
import { GetAll, Create } from '../controllers/eatery';

const router = express.Router();

router.get('/eateries', async (req, res) => {
  const eateries = await GetAll();

  res.json({
    eateries
  });
});

router.post('/eatery', async (req, res) => {
  try {
    const eatery = await Create({
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
