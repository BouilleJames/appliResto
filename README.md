# appliResto
mon projet de caisse de Pizzeria

#Voici ma base de données
``
CREATE DATABASE IF NOT EXISTS resto_app;
use resto_app;
-- Table des utilisateurs (patron du restaurant)
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  login VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL
);
INSERT INTO users (`login`, `password`) VALUES
('admin1@example.com', 'mot_de_passe_1'),
('admin2@example.com', 'mot_de_passe_2');


-- Table des catégories des articles
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
INSERT INTO categories (name) VALUES
('starter'),
('main'),
('dessert');

-- Table des articles
CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);
INSERT INTO items ( category_id, title, `description`, price, image_url) VALUES
(1, 'Buttermilk Pancakes', 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed', 15.99,  './images/item-1.jpeg'),
(2, 'Diner Double', 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats', 13.99, './images/item-2.jpeg'),
(1, 'Godzilla Milkshake','ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.', 6.99, './images/item-3.jpeg'),
(2, 'country delight', 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut', 20.99, './images/item-4.jpeg'),
(1, 'egg attack', "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up", 22.99, './images/item-5.jpeg'),
(3, "oreo dream", "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday", 18.99, "./images/item-6.jpeg"),
(3, 'bacon overflow', 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird ', 8.99, './images/item-7.jpeg'),
(3, 'american classic', 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut', 12.99, './images/item-8.jpeg'),
(2, 'quarantine buddy', 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.', 16.99, './images/item-9.jpeg');

-- Table pour stocker les commandes des clients
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table pour stocker les articles dans chaque commande
CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  item_id INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE
);


``
