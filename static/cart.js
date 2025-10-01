document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');

    // Add to cart (on product pages)
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const existing = cart.find(item => item.id === id);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${name} added to cart.`);
        });
    });

    // Show cart (on cart.html)
    if (cartItemsContainer && totalPriceEl) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';

        const updateCartDisplay = () => {
            cartItemsContainer.innerHTML = '';
            let total = 0;

            cart.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <strong>${item.name}</strong><br>
                    Quantity: 
                    <button class="decrease" data-index="${index}">-</button>
                    ${item.quantity}
                    <button class="increase" data-index="${index}">+</button>
                    <br>
                    Price: $${(item.price * item.quantity).toFixed(2)}<br>
                    <button class="remove" data-index="${index}">Remove</button>
                    <hr>
                `;
                cartItemsContainer.appendChild(div);
                total += item.price * item.quantity;
            });

            totalPriceEl.textContent = total.toFixed(2);
            localStorage.setItem('cart', JSON.stringify(cart));
        };

        updateCartDisplay();

        cartItemsContainer.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            if (e.target.classList.contains('remove')) {
                cart.splice(index, 1);
            } else if (e.target.classList.contains('increase')) {
                cart[index].quantity += 1;
            } else if (e.target.classList.contains('decrease')) {
                if (cart[index].quantity > 1) {
                    cart[index].quantity -= 1;
                } else {
                    cart.splice(index, 1);
                }
            }
            updateCartDisplay();
        });
    }
});
