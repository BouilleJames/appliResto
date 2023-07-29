import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary">
      <div className="card-body">
        <form action="/admin/ajouter-un-produit" method="POST">
          <div className="form-group">
            <label for="name">Nom:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Entrer Nom"
              className="form-control"
            />
          </div>
          <div>
            <label for="price">Prix</label>
            <input
              type="float"
              name="price"
              placeholder="Enter Price"
              className="form-control"
            />
          </div>
          <button className="btn btn-success" type="submit">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
