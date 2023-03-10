const express = require("express");
const listProducts = require('../db/listData.js')
const router = express.Router();
const db = require('../db/db.js')

router.get("/", async (req, res, next) => {
  db.all("SELECT * FROM products", (error, rows) => {
    if (error) {
      res.status(500).send("Internal server error");
    } else {
      return res.status(200).json(rows);
    }
  });
});

router.post("/", async (req, res, next) => {
  console.log(req)
  res.status(201).json('POSTED')
});

module.exports = router;
