// Import packages
const express = require("express");
const home = require("./routes/home");
const products = require("./routes/products");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/", home);
app.use("/products", products);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
