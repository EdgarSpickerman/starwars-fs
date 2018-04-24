const router = require('express').Router();
const db = require("../database").db;

router.get("/characters", (req, res, next) => {
  db.ref("/characters").once("value").then(ss => res.json(ss.val()));
})

router.get("/characters/:character", (req, res, next) => {
  db.ref(`/characters/${req.params.character}`).once("value")
    .then(ss => res.json(ss.val()))
})

router.post("/characters", (req, res, next) => {
  db.ref(`/characters/${req.body.name}`).set(req.body)
    .then(data=>res.json({data:"data",data1:data}))
})

module.exports = router;