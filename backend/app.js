const express = require("express");
const app = express();
const path = require("path");

const stuffRoutes = require("./routes/stuff");
const userRoutes = require("./routes/user");

// Middleware pour gérer les en-têtes CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Middleware pour traiter les données de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes pour gérer les articles (stuff)
app.use("/api/stuff", stuffRoutes);

// Routes pour gérer les utilisateurs (auth)
app.use("/api/auth", userRoutes);

// Middleware pour servir les images statiques depuis le dossier "images"
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
