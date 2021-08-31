import express from 'express';
import { GetAll, Create, Search } from '../controllers/school';

var router = express.Router();

router.get('/schools', async (req, res) => {
  const schools = await GetAll();

  res.json({
    schools
  });
});



router.post('/school', async (req, res) => {
  try {
    const school = await Create({
      name: req.body.name,
      location: req.body.location
    });

    res.json({
      school
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

router.get('/schools/search', async (req, res) => {
  try {
    const results = await Search(req.query.query);

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

export default router;
