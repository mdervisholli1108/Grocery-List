//GroceryList//

const form = document.querySelector('form');
const list = document.querySelector("#list");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newList = document.createElement("li");
    const prodTxt = document.querySelector("#product").value;
    const qtyTxt = document.querySelector("#qty").value;
    newList.innerText = `${qtyTxt} ${prodTxt}`;
    list.appendChild(newList);
    form.elements.product.value = "";
    form.elements.qty.value = "";
});