const express = require("express");
const app = require("./app");
const { pool } = require("./config/db"); // Importation du pool de connexions MySQL

const port = 3000;

// Middleware qui permet de traiter les données de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connecter à la base de données MySQL à l'aide du pool de connexions
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connecté à la base de données MySQL: resto_app !");
  connection.release();

  // Démarrer le serveur une fois la connexion à la base de données établie
  app.listen(port, () => console.log(`Server running on port ${port}`));
});

// Utiliser le middleware d'authentification uniquement pour les routes qui en ont besoin
const authenticateUser = require("./middleware/auth");
app.use("/post", authenticateUser, require("./routes/stuff")); // Protéger les routes d'ajout, de modification et de suppression des articles avec le middleware d'authentification
app.use("/user", authenticateUser, require("./routes/user")); // Protéger les routes de modification et de suppression des utilisateurs avec le middleware d'authentification
