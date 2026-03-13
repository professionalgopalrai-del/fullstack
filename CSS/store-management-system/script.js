let products = JSON.parse(localStorage.getItem("products")) || [
    {name: "Milk", price: 50, qty: 10},
    {name: "Bread", price: 30, qty: 20},
    {name: "Eggs (12pcs)", price: 60, qty: 15},
    {name: "Butter", price: 120, qty: 5},
];

const form = document.getElementById("productForm");
const list = document.getElementById("productList");

let editIndex = -1;
let bill = [];


/* ---------- Render Products ---------- */
function renderProducts() {

    list.innerHTML = "";

    products.forEach((product, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${product.name}</td>
        <td>₹${product.price}</td>
        <td>${product.qty}</td>
        <td>
        <button class="edit-btn" onclick="editProduct(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>
        </td>
        `;

        list.appendChild(row);
    });

    localStorage.setItem("products", JSON.stringify(products));
    updateTotal();
    loadBillProducts();
}

/* ---------- Add / Update Product ---------- */
form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = Number(document.getElementById("price").value);
    const qty = Number(document.getElementById("qty").value);

    if (editIndex === -1) {
        products.push({ name, price, qty });
    } else {
        products[editIndex] = { name, price, qty };
        editIndex = -1;
    }

    form.reset();
    renderProducts();
});

/* ---------- Delete Product ---------- */
function deleteProduct(index) {
    products.splice(index, 1);
    renderProducts();
}

/* ---------- Edit Product ---------- */
function editProduct(index) {
    const product = products[index];
    document.getElementById("name").value = product.name;
    document.getElementById("price").value = product.price;
    document.getElementById("qty").value = product.qty;
    editIndex = index;
}

/* ---------- Search Product ---------- */
document.getElementById("search").addEventListener("keyup", function() {
    const value = this.value.toLowerCase();
    const rows = document.querySelectorAll("#productList tr");
    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(value) ? "" : "none";
    });
});

/* ---------- Store Total Value ---------- */
function updateTotal() {
    const total = products.reduce((sum, p) => sum + (p.price * p.qty), 0);
    document.getElementById("total").innerText = "Total Store Value: ₹" + total;
}

/* ---------- Billing ---------- */
function loadBillProducts() {
    const select = document.getElementById("billProduct");
    select.innerHTML = "";
    products.forEach((p, i) => {
        select.innerHTML += `<option value="${i}">${p.name}</option>`;
    });
}

function addToBill() {
    const index = document.getElementById("billProduct").value;
    const qty = Number(document.getElementById("billQty").value);
    const product = products[index];

    if(qty > product.qty) {
        alert("Not enough stock!");
        return;
    }

    product.qty -= qty; // Reduce stock
    const total = product.price * qty;
    bill.push(total);
    document.getElementById("billTotal").innerText = "Bill Total: ₹" + bill.reduce((a,b)=>a+b,0);

    renderProducts();
}

/* ---------- Initial Load ---------- */
renderProducts();