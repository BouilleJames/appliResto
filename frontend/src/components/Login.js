import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez implémenter la logique de connexion en utilisant les valeurs de 'email' et 'password'
    // Par exemple, vous pouvez envoyer une requête HTTP (axios, fetch, etc.) vers votre backend pour vérifier les informations d'identification
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary">
      <div className="p-3 bg-white w-25">
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
          <button className="btn btn-success" type="submit">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
