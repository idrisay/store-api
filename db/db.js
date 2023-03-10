const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./store.db";

function createDbConnection() {
  if (fs.existsSync(filepath)) {
    console.log('connect existing db')
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
      createTable(db);
    });
    console.log("Connection with SQLite has been established");
    return db;
  }
}

function createTable(db) {
  db.exec(`
  CREATE TABLE products
  (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    title   VARCHAR(50) NOT NULL,
    image_url   VARCHAR(200) NOT NULL,
    category   VARCHAR(50) NOT NULL,
    description   VARCHAR(200) NOT NULL,
    price INTEGER NOT NULL
  );
`);
}

module.exports = createDbConnection();