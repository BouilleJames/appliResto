import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // Ici, vous pouvez implémenter la logique de connexion en utilisant les valeurs de 'email' et 'password'
    // Par exemple, vous pouvez envoyer une requête HTTP (axios, fetch, etc.) vers votre backend pour vérifier les informations d'identification
    // Validation côté client : Vérifier que les champs ne sont pas vides
    if (!email || !password || error) {
      setError("Veuillez remplir tous les champs");
      return;
    }
    // Envoyer la requête d'authentification au backend
    axios
      .post("/api/login", { email, password })
      .then((response) => {
        // Récupérer le jeton d'authentification côté serveur
        const token = response.data.token;
        // Stocker le jeton dans le local storage pour garder l'utilisateur connecté entre les pages
        localStorage.setItem("token", token);
        // Rediriger vers la page d'accueil ou une autre page sécurisée
        window.location.replace("/home");
      })
      .catch((error) => {
        setError("Adresse e-mail ou mot de passe incorrect");

        // Afficher l'erreur dans la console
        console.log(error);
      });

    // Réinitialiser les valeurs des champs
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-primary"
      style={{ height: "70vh" }}
    >
      <div className="card p-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <br />
          <button className="btn btn-success" type="submit">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
