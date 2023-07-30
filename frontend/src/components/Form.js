// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/Home.css";

// const Form = () => {
//   const [items, setItems] = useState([]);
//   const [isShoppingOpen, setIsShoppingOpen] = useState(false);

//   useEffect(() => {
//     // Charger les produits à partir de la base de données une fois que le composant est monté
//     axios.get("/api/items").then((response) => {
//       setItems(response.data);
//     });
//   }, []);

//   const handleShoppingOpen = () => {
//     setIsShoppingOpen(true);
//   };

//   const handleShoppingClose = () => {
//     setIsShoppingOpen(false);
//   };

//   const handleAddToCart = (itemsId) => {
//     // Ici, vous pouvez implémenter la logique pour ajouter un produit au panier
//     // par exemple, envoyer une requête HTTP pour ajouter le produit à la commande
//     console.log("Ajouter au panier :", itemsId);
//   };

//   return (
//     <div className="container">
//       <header>
//         <h1>Commandes</h1>
//         <div className="shopping" onClick={handleShoppingOpen}>
//           <img
//             src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
//             alt="cart"
//           />
//           <span className="quantity">0</span>
//         </div>
//       </header>
//       <div className={`list ${isShoppingOpen ? "active" : ""}`}>
//         {items.map((items) => (
//           <div className="item" key={items.id}>
//             <img src={items.image_url} alt={items.title} />
//             <div className="title">{items.title}</div>
//             <div className="price">{items.price.toLocaleString()}€</div>
//             <button onClick={() => handleAddToCart(items.id)}>
//               Ajouter au panier
//             </button>
//           </div>
//         ))}
//       </div>
//       <div
//         className={`overlay ${isShoppingOpen ? "active" : ""}`}
//         onClick={handleShoppingClose}
//       ></div>
//     </div>
//   );
// };

// export default Form;

//***************************************************************************  */

import React from "react";

const Form = () => {
  let openShopping = document.querySelector(".shopping");
  let closeShopping = document.querySelector(".closeShopping");
  let list = document.querySelector(".list");
  let listCard = document.querySelector(".listCard");
  let body = document.querySelector("body");
  let total = document.querySelector(".total");
  let quantity = document.querySelector(".quantity");

  openShopping.addEventListener("click", () => {
    body.classList.add("active");
  });

  closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
  });
  let products = [
    {
      id: 1,
      name: "PRODUCT NAME 1",
      image: "1.PNG",
      price: 120000,
    },
    {
      id: 2,
      name: "PRODUCT NAME 2",
      image: "2.PNG",
      price: 80000,
    },
    {
      id: 3,
      name: "PRODUCT NAME 3",
      image: "3.PNG",
      price: 20000,
    },
    {
      id: 4,
      name: "PRODUCT NAME 4",
      image: "4.PNG",
      price: 4000,
    },
    {
      id: 5,
      name: "PRODUCT NAME 5",
      image: "5.PNG",
      price: 5000,
    },
    {
      id: 6,
      name: "PRODUCT NAME 6",
      image: "6.PNG",
      price: 600,
    },
  ];

  let listCards = [];
  function initApp() {
    products.forEach((value, key) => {
      let newDiv = document.createElement("div");
      newDiv.classList.add("item");
      newDiv.innerHTML = `
      <img src="${value.image}"/>
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()}€</div>
      <button onclick="addToCart(${key})">Ajouter au panier</button>
      `;
      list.appendChild(newDiv);
    });
  }
  initApp();
  function addToCart(key) {
    if (listCards[key] == null) {
      listCards[key] = products[key];
      listCards[key].quantity = 1;
    }
    reloadCard();
  }
  function reloadCard() {
    listCards.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
      totalPrice = totalPrice + value.price;
      count = count + value.quantity;

      if (value != null) {
        let newDiv = document.createElement("li");
        newDiv.innerHTML = `
      <div><img src="image/${value.image}"/></div>
      <div>${value.name}</div>
      <div>${value.price.toLocaleString()}</div>
      <div>
        <button onclick="changeQuantity(${key}, ${
          value.quantity - 1
        })">-</button>
        <div class="count">${value.quantity}</div>
        <button onclick="changeQuantity(${key}, ${
          value.quantity + 1
        })">+</button>
      </div>
      `;
        listCards.appenchild(newDiv);
      }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
  }
  function changeQuantity(key, quantity) {
    if (quantity === 0) {
      delete listCards[key];
    } else {
      listCards[key].quantity = quantity;
      listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
  }

  return (
    <div className="container">
      <header>
        <h1>Commandes</h1>
        <div className="shopping">
          <img
            src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
            alt="cart"
          />
          <span className="quantity">0</span>
        </div>
      </header>
      <div className="list"></div>
    </div>
  );
};

export default Form;
// ********************************************************************************
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Form = () => {
//   return (
//     <div className="d-flex justify-content-center align-items-center bg-primary">
//       <div className="card-body">
//         <form action="/admin/ajouter-un-produit" method="POST">
//           <div className="form-group">
//             <label for="categories">Catégories par identifiant</label>
//             <input
//               type="int"
//               name="categories"
//               placeholder="Entree(1) ou Plat(2) ou Dessert(3) ou Boisson(4)"
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label for="name">Nom:</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Entrez Nom"
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label for="description">Description:</label>
//             <input
//               type="text"
//               name="description"
//               placeholder="Entrez Description"
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label for="price">Prix:</label>
//             <input
//               type="int"
//               name="price"
//               placeholder="Entrez Prix"
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label for="image">Url de l'image</label>
//             <input
//               type="text"
//               name="image"
//               placeholder="Entrez l'Url de l'image"
//               className="form-control"
//             />
//           </div>
//           <button className="btn btn-success" type="submit">
//             Ajouter
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;
