// *************************Création de Modal pour chaque élément nav>ul*************************
let tabMenu = document.getElementsByTagName("ul");
for (let i = 0; i < tabMenu.length; i++) {
  tabMenu[i].addEventListener("click", function () {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
            <div class="modalContent">
                <h2>Stock</h2>
                <p>lorem10</p>
                <button class="closeBtn">Close</button>
            </div>`;
            body.appendChild(modal);
            console.log(tabMenu);
  });
}
console.log(tabMenu);

// Sélectionner tous les boutons "De selection pour commande"
// const buttons = document.querySelectorAll('.subnavbtn','subnavbtn1');
// const imgTab =document.querySelectorAll('.card img');
