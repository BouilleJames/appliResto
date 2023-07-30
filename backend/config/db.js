// const dotenv = require("dotenv");
// dotenv.config();

// const mysql = require("mysql2");

// const dbconnexion = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// const connectToDatabase = () => {
//   return new Promise((resolve, reject) => {
//     dbconnexion.connect((err) => {
//       if (err) {
//         console.error("Erreur de connexion à la base de données :", err);
//         reject(err);
//       } else {
//         console.log("Connecté à la base de données MySQL: resto_app !");
//         resolve();
//       }
//     });
//   });
// };

// module.exports = { dbconnexion, connectToDatabase };

const dotenv = require("dotenv");
dotenv.config();

const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const promisePool = pool.promise();

// module.exports = {
//   pool: promisePool, // Exporter le pool de connexions correctement
//   execute: pool.execute, // Exporter la méthode execute pour effectuer des requêtes directes
// };
module.exports = promisePool;
