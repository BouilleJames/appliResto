const multer = require("multer");

const MIME_TYPES = {
  // dictionnaire des types MIME
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // indique à multer d'enregistrer les fichiers dans le dossier images
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    // indique à multer d'utiliser le nom d'origine, de remplacer les espaces par des underscores et d'ajouter un timestamp Date.now() comme nom de fichier
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype]; // résout l'extension de fichier appropriée
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("image"); // exporte l'élément multer entièrement configuré, lui passant notre constante storage, et lui indiquant que nous gérerons uniquement les téléchargements de fichiers image
