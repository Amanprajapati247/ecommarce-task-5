function displayCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.title} - $${product.price}`;
        cartList.appendChild(li);
    });
}

function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

displayCart();