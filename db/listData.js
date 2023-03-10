const db = require("./db");

// function listProducts() {
//   db.each(`SELECT * FROM products`, (error, row) => {
//     if (error) {
//       throw new Error(error.message);
//     }
//     console.log(row);
//     return row;
//   });
// }

function listData() {
  console.log("Hello World!");
  db.each(`SELECT * FROM products`, (error, row) => {
    console.log('ER', error)
    if (error) {
      throw new Error(error.message);
    }
    console.log('rrr', row);
  });
  // db.each(`SELECT * FROM products`, (error, row) => {
  //   console.log('asdasdad')
  //   if (error) {
  //     throw new Error(error.message);
  //   }
  //   console.log(row);
  //   console.log('asdasd')
  //   return row;
  // });
  // return "MYFN";
}

// listProducts();
// module.export = listProducts();
module.exports = listData;
