import React from "react";

const Carts = ({ cartItems }) => {
  return (
    <div className="title-cart">
      <h2>Addition</h2>
      <div className="underline"></div>
      <table>
        <thead>
          <tr>
            <th>Nom du plat</th>
            <th>Catégorie</th>
            <th>Prix</th>
            <th>Image</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem, index) => (
            <tr key={index}>
              <td>{cartItem.name}</td>
              <td>{cartItem.category}</td>
              <td>{cartItem.price}</td>
              <td>
                <img
                  src={cartItem.image}
                  alt={cartItem.name}
                  style={{ width: "100px" }}
                />
              </td>
              <td>{cartItem.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Carts;
