document.addEventListener('DOMContentLoaded', () => {
    const summary = document.getElementById('order-summary');
    const order = JSON.parse(localStorage.getItem('lastOrder'));

    if (!order) {
        summary.innerHTML = '<p>No order data found. Please place an order first.</p>';
        return;
    }

    let html = `<h3>Customer: ${order.name}</h3>`;
    html += `<p>Payment method: ${order.payment}</p>`;
    html += `<p>Shipping to: ${order.address}</p>`;
    html += `<h4>Items:</h4><ul>`;

    let total = 0;
    order.items.forEach(item => {
        html += `<li>${item.name} x ${item.quantity} = $${(item.quantity * item.price).toFixed(2)}</li>`;
        total += item.price * item.quantity;
    });

    html += `</ul><p><strong>Total:</strong> $${total.toFixed(2)}</p>`;
    summary.innerHTML = html;
});
