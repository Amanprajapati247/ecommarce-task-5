let products = [];

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        products = data;
        displayProducts(products);
        populateCategories();
    });

function populateCategories() {
    const categories = [...new Set(products.map(p => p.category))];
    const select = document.getElementById('filterCategory');
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
    });
}

function displayProducts(productsToShow) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    productsToShow.forEach(product => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        img.loading = 'lazy';
        img.style.width = '50px';
        li.appendChild(img);
        li.innerHTML += `${product.title} - $${product.price} (Rating: ${product.rating.rate}) `;
        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.classList.add('add-to-cart');
        button.onclick = () => addToCart(product);
        li.appendChild(button);
        productList.appendChild(li);
    });
}

function filterProducts() {
    const category = document.getElementById('filterCategory').value;
    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = products.filter(p => p.category === category);
    }
    displayProducts(filteredProducts);
}

function sortProducts(criteria) {
    const sortedProducts = [...products].sort((a, b) => {
        if (criteria === 'price') return a.price - b.price;
        if (criteria === 'rating') return b.rating.rate - a.rating.rate;
        return 0;
    });
    displayProducts(sortedProducts);
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}