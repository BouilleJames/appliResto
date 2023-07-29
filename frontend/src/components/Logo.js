import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Logo = () => {
  return (
    <div className="vh-10 d-flex flex-column align-items-center justify-content-center bg-primary">
      <div>
        {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
        <img src="/logo.jpg" alt="logo restaurant" />
      </div>
      <div>
        <h3>Connectez-vous</h3>
      </div>
    </div>
  );
};

export default Logo;
