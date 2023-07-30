import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Login from "./components/Login"; // Importez le composant Login

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        {/* Ajoutez la route pour le composant Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import Admin from "./pages/Admin";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Admin />} />{" "}
//         {/*si jamais ton chemin est l'accueil du site et bien ,tu vas me fournir l'élément suivant */}
//         <Route path="/home" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
//         <Route path="*" element={<Admin />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
