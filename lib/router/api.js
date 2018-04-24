const router = require('express').Router();
const db = require("../database").db;

router.get("/characters", (req, res, next) => {
  db.ref("/characters").once("value").then(ss => res.send(ss.val()));
})

router.get("/characters/:character", (req, res, next) => {
  db.ref(`/characters/${req.params.character}`).once("value")
    .then(ss => {
      if (ss.val() === null) return res.send("there was no match");
      res.send(ss.val())
    })
})

router.post("/characters", (req, res, next) => {
  res.send('this is the POST route for /api/characters');
})

module.exports = router;