const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const multer = require("../middleware/multer-config");
const pool = require("../config/db"); // Importez le pool de connexions
const fs = require("fs"); // Ajout de la dépendance fs pour pouvoir utiliser fs.unlink()

router.get("/", auth, (req, res, next) => {
  pool
    .execute("SELECT * FROM items")
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch((error) => {
      res.status(400).json({
        error:
          "Erreur lors de la récupération des données depuis la base de données",
      });
    });
});

router.post("/", auth, multer, (req, res, next) => {
  const thingObject = JSON.parse(req.body.thing);
  delete thingObject._id;
  delete thingObject.userId;

  const { title, description, price } = thingObject;
  const userId = req.auth.userId;
  const imageUrl = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;
  // Validation côté serveur : Vérifier que les champs ne sont pas vides
  if (!title || !description || !price || !req.file) {
    return res.status(400).json({ error: "Veuillez remplir tous les champs" });
  }

  pool
    .execute(
      "INSERT INTO items (title, description, image_url, user_id, price) VALUES (?, ?, ?, ?, ?)",
      [title, description, imageUrl, userId, price]
    )
    .then(() => {
      res.status(201).json({
        message: "Objet enregistré avec succès !",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: "Erreur lors de l'enregistrement de l'objet",
      });
    });
});

router.get("/:id", auth, (req, res, next) => {
  const thingId = req.params.id;

  pool
    .execute("SELECT * FROM items WHERE id = ?", [thingId]) // Remplacez "articles" par "items"
    .then(([rows]) => {
      if (rows.length === 0) {
        return res.status(404).json({ error: "Objet non trouvé" });
      }
      const thing = rows[0];
      res.status(200).json(thing);
    })
    .catch((error) => {
      res
        .status(400)
        .json({ error: "Erreur lors de la récupération de l'objet" });
    });
});

router.put("/:id", auth, multer, (req, res, next) => {
  const thingObject = req.file
    ? {
        ...JSON.parse(req.body.thing),
        image_url: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`, // Utilisation de req.file.filename pour obtenir le nom du fichier enregistré
      }
    : { ...req.body };

  delete thingObject._userId;
  const thingId = req.params.id;

  pool
    .execute("SELECT user_id, image_url FROM items WHERE id = ?", [thingId]) // Remplacez "articles" par "items"
    .then(([rows]) => {
      if (rows.length === 0) {
        return res.status(404).json({ error: "Objet non trouvé" });
      }
      const thing = rows[0];
      if (thing.user_id !== req.auth.userId) {
        return res.status(401).json({ message: "Non autorisé" });
      }

      const { title, description, price, image_url } = thingObject;
      const filename = thing.image_url.split("/images/")[1];

      // Supprimer l'ancienne image du serveur avant de mettre à jour la base de données
      fs.unlink(`images/${filename}`, (error) => {
        if (error) {
          console.error("Erreur lors de la suppression du fichier :", error);
        }
        // Mettre à jour l'objet dans la base de données avec la nouvelle image_url
        pool
          .execute(
            "UPDATE items SET title=?, description=?, price=?, image_url=? WHERE id=?",
            [title, description, price, image_url, thingId]
          )
          .then(() => {
            res.status(200).json({ message: "Objet modifié avec succès !" });
          })
          .catch((error) =>
            res
              .status(400)
              .json({ error: "Erreur lors de la modification de l'objet" })
          );
      });
    })
    .catch((error) =>
      res
        .status(400)
        .json({ error: "Erreur lors de la modification de l'objet" })
    );
});

router.delete("/:id", auth, (req, res, next) => {
  const thingId = req.params.id;

  pool
    .execute("SELECT * FROM items WHERE id = ?", [thingId]) // Remplacez "articles" par "items"
    .then(([rows]) => {
      if (rows.length === 0) {
        return res.status(404).json({ error: "Objet non trouvé" });
      }
      const thing = rows[0];
      if (thing.user_id !== req.auth.userId) {
        return res.status(401).json({ message: "Non autorisé" });
      }

      const filename = thing.image_url.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        return pool.execute("DELETE FROM items WHERE id=?", [thingId]);
      });
    })
    .then(() => {
      res.status(200).json({ message: "Objet supprimé avec succès !" });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ error: "Erreur lors de la suppression de l'objet" });
    });
});

router.get("/", auth, (req, res, next) => {
  pool
    .execute("SELECT * FROM items") // Remplacez "articles" par "items"
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch((error) => {
      res.status(400).json({
        error: "Erreur lors de la récupération des objets",
      });
    });
});

module.exports = router;
