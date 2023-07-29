import React from "react";

const Logo = () => {
  return (
    <div className="title">
      {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
      <img src="../../public/logo.JPG" alt="logo restaurant" />
      <h3>Connectez-vous</h3>
    </div>
  );
};

export default Logo;
