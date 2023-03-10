const db = require("./db");

function updateRow() {
  const [id, title] = process.argv.slice(2);
  db.run(
    `UPDATE products SET title = ? WHERE id = ?`,
    [title, id],
    function (error) {
      if (error) {
        console.error(error.message);
      }
      console.log(`Row ${id} has been updated`);
    }
  );
}

updateRow();