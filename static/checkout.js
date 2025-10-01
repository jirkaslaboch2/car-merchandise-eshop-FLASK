document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkout-form');
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const cardDetails = document.getElementById('card-details');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const address = formData.get('address');
        const email = formData.get('email');
        const payment = formData.get('payment');

        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const order = {
            name,
            address,
            email,
            payment,
            items: cart
        };

        localStorage.setItem('lastOrder', JSON.stringify(order));
        localStorage.removeItem('cart');
        window.location.href = 'confirmation.html';
    });

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            cardDetails.style.display = (radio.value === 'card') ? 'block' : 'none';
        });
    });
});
