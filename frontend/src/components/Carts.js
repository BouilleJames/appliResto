import React from "react";
import "../styles/Home.css";

const Carts = () => {
  return (
    <div className="card">
      <h1>Addition</h1>
      <ul className="listCard"></ul>
      <div className="checkOut">
        <div className="total">0</div>
        <div className="closeShopping">Close</div>
      </div>
    </div>
  );
};

export default Carts;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Carts = ({ cartItems }) => {
//   return (
//     <div className="title-cart">
//       <h2>Addition</h2>
//       <div className="underline"></div>
//       <table>
//         <thead>
//           <tr>
//             <th>Catégorie</th>
//             <th>Nom du plat</th>
//             <th>Description</th>
//             <th>Prix</th>
//             <th>Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((cartItem, index) => (
//             <tr key={index}>
//               <td>{cartItem.name}</td>
//               <td>{cartItem.category}</td>
//               <td>{cartItem.price}</td>
//               <td>
//                 <img
//                   src={cartItem.image}
//                   alt={cartItem.name}
//                   style={{ width: "100px" }}
//                 />
//               </td>
//               <td>{cartItem.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Carts;
