// Function to load cart items from localStorage and display them
function loadCart() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    // Retrieve cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    // Display each cart item
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        totalPrice += item.price;
    });

    // Display total price
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Load cart when the page is opened
window.onload = loadCart;
