document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Обработка клика по продукту
    function addToCart(productId) {
        if (!cartItems.includes(productId)) {
            cartItems.push(productId);
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }

    // Отображение продуктов
    function generateProducts() {
        const products = [
            {id: 1, name: 'Шёлковые Колготки', price: '1500 ₽'},
            {id: 2, name: 'Хлопковое Бельё', price: '800 ₽'}
        ];

        products.forEach((product) => {
            const card = `
                <div class="product-card">
                    <img src="images/${product.id}.jpg" alt="${product.name}" />
                    <div class="product-card-info">
                        <span class="product-name">${product.name}</span>
                        <span class="product-price">${product.price}</span>
                        <button onclick="addToCart(${product.id})" class="cart-btn">Купить</button>
                    </div>
                </div>
            `;
            productGrid.insertAdjacentHTML('beforeend', card);
        });
    }

    generateProducts();

    // Картинка корзины
    const cartIcon = document.querySelector('#cart-icon');
    let cartModal = null;

    cartIcon.addEventListener('click', () => {
        if (!cartModal) {
            cartModal = createCartModal();
            document.body.appendChild(cartModal);
        }

        toggleCartModal();
  