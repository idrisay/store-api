const db = require("./db");

function insertRow() {
  const [title, image_url, category, description, price] = process.argv.slice(2);
  db.run(
    `INSERT INTO products (title, image_url, category, description, price) VALUES (?, ?, ?, ?, ?)`,
    [title, image_url, category, description, price],
    function (error) {
      if (error) {
        console.error(error.message);
      }
      console.log(`Inserted a row with the ID: ${this.lastID}`);
    }
  );
}

insertRow();