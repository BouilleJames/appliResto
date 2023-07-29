const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/db"); // Utiliser le pool de connexions

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = {
        email: req.body.email,
        password: hash,
      };

      return pool.execute("INSERT INTO users (login, password) VALUES (?, ?)", [
        user.email,
        user.password,
      ]);
    })
    .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.login = (req, res, next) => {
  const email = req.body.email;

  pool
    .execute("SELECT * FROM users WHERE login = ?", [email])
    .then(([rows]) => {
      if (rows.length === 0) {
        return res
          .status(401)
          .json({ message: "Paire login/mot de passe incorrecte" });
      }
      const user = rows[0];
      return bcrypt.compare(req.body.password, user.password).then((valid) => {
        if (!valid) {
          return res
            .status(401)
            .json({ message: "Paire login/mot de passe incorrecte" });
        }
        res.status(200).json({
          userId: user.id,
          token: jwt.sign(
            { userId: user.id },
            process.env.RANDOM_TOKEN_SECRET, // Modifier pour utiliser la clé secrète stockée dans l'environnement
            { expiresIn: "24h" }
          ),
        });
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.logout = (req, res, next) => {
  res.status(200).json({ message: "Utilisateur déconnecté !" });
};

// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const pool = require("../config/db"); // Utiliser le pool de connexions

// exports.signup = (req, res, next) => {
//   bcrypt
//     .hash(req.body.password, 10)
//     .then((hash) => {
//       const user = {
//         email: req.body.email,
//         password: hash,
//       };

//       return pool.execute("INSERT INTO users (email, password) VALUES (?, ?)", [
//         user.email,
//         user.password,
//       ]);
//     })
//     .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
//     .catch((error) => res.status(400).json({ error }));
// };

// exports.login = (req, res, next) => {
//   const email = req.body.email;

//   pool
//     .execute("SELECT * FROM users WHERE email = ?", [email])
//     .then(([rows]) => {
//       if (rows.length === 0) {
//         return res
//           .status(401)
//           .json({ message: "Paire login/mot de passe incorrecte" });
//       }
//       const user = rows[0];
//       return bcrypt.compare(req.body.password, user.password).then((valid) => {
//         if (!valid) {
//           return res
//             .status(401)
//             .json({ message: "Paire login/mot de passe incorrecte" });
//         }
//         const token = jwt.sign(
//           { userId: user.id }, // Encodage des données dans le token (payload)
//           "RANDOM_TOKEN_SECRET", // Clé secrète de développement (à remplacer par une clé plus sécurisée en production)
//           { expiresIn: "24h" } // Durée de validité du token
//         );
//         res.status(200).json({
//           userId: user.id,
//           token: token,
//         });
//       });
//     })
//     .catch((error) => res.status(500).json({ error }));
// };
