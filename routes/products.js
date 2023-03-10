const express = require("express");
const listProducts = require("../db/listData.js");
const router = express.Router();
const db = require("../db/db.js");

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
  const { title, image_url, category, description, price } = req.body;
  db.run(
    `INSERT INTO products (title, image_url, category, description, price) VALUES (?, ?, ?, ?, ?)`,
    [title, image_url, category, description, price],
    function (error) {
      if (error) {
        res.status(500).send("Internal server error", error.message);
      }
      res
        .status(201)
        .json({ message: `Inserted a row with the ID: ${this.lastID}` });
    }
  );
});

module.exports = router;
