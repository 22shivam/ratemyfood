import express from 'express';
import * as functions from "firebase-functions";
import cors from 'cors';

import * as Feedback from '../controllers/feedback';

var router = express();

router.use(cors());

router.post('/feedback', async (req, res) => {
  try {
    const feedback = await Feedback.Create({
      author: req.body.author,
      email: req.body.email,
      comment: req.body.comment
    });

    res.json({
      feedback
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

export default functions.https.onRequest(router);
