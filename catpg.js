
// Data arrays for categories
const vegetables = [
    { name: "Tomato", price: 1.5, weight: "1 Kg" },
    { name: "Potato", price: 0.8, weight: "1 Kg" },
    { name: "Carrot", price: 1.2, weight: "1 Kg" },
];

const fruits = [
    { name: "Apple", price: 2.0, weight: "1 Kg" },
    { name: "Banana", price: 1.1, weight: "1 Kg" },
    { name: "Orange", price: 1.8, weight: "1 Kg" },
];

const dairy = [
    { name: "Milk", price: 0.99, weight: "1 Liter" },
    { name: "Cheese", price: 3.5, weight: "1 Pack" },
    { name: "Yogurt", price: 1.5, weight: "1 Pack" },
];

// Function to render cards for each category
function renderCards(items, containerId) {
    const container = document.getElementById(containerId);
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price} per ${item.weight}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

// Render all categories
renderCards(vegetables, 'vegetable-cards');
renderCards(fruits, 'fruit-cards');
renderCards(dairy, 'dairy-cards');

// Function to add items to the cart (stores in localStorage)
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to the cart!`);
}
