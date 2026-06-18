const products = [
{
id:1,
name:"Lakme Lipstick",
price:499,
image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500"
},
{
id:2,
name:"Maybelline Foundation",
price:699,
image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500"
},
{
id:3,
name:"Face Serum",
price:899,
image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500"
},
{
id:4,
name:"Luxury Perfume",
price:1299,
image:"https://images.unsplash.com/photo-1541643600914-78b084683601?w=500"
}
];

let cart = [];

const container = document.getElementById("product-container");

products.forEach(product => {
container.innerHTML += `
<div class="card">
<img src="${product.image}">
<div class="card-content">
<h3>${product.name}</h3>
<p class="price">₹${product.price}</p>
<button onclick="addToCart(${product.id})">
Add to Cart
</button>
</div>
</div>
`;
});

function addToCart(id){

const item = products.find(p => p.id === id);

cart.push(item);

updateCart();
}

function updateCart(){

document.getElementById("cart-count").textContent = cart.length;

const cartItems = document.getElementById("cart-items");

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `
<div class="cart-item">
<div>
<h4>${item.name}</h4>
<p>₹${item.price}</p>
</div>

<button class="remove-btn"
onclick="removeItem(${index})">
X
</button>
</div>
`;
});

document.getElementById("total-price").textContent = total;
}

function removeItem(index){

cart.splice(index,1);

updateCart();
}

function toggleCart(){

document.getElementById("cartSidebar")
.classList.toggle("active");
}
/* b*/