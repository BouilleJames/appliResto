const jwt = require("jsonwebtoken");
const { pool } = require("../config/db");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET); // Modifier pour utiliser la clé secrète stockée dans l'environnement
    const userId = decodedToken.userId;

    pool
      .execute("SELECT * FROM users WHERE id = ?", [userId])
      .then(([rows]) => {
        if (rows.length === 0) {
          return res.status(401).json({ error: "Unauthorized" });
        }
        req.auth = { userId: userId };
        next();
      })
      .catch((error) => {
        res.status(401).json({ error });
      });
  } catch (error) {
    res.status(401).json({ error });
  }
};
