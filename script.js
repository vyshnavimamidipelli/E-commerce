document.addEventListener('DOMContentLoaded', function() {
  const cartItems = document.getElementById('cart-items');
  const total = document.getElementById('total');
  const productButtons = document.querySelectorAll('.product button');

  let cartTotal = 0;

  productButtons.forEach(button => {
    button.addEventListener('click', function() {
      const product = this.parentNode;
      const productName = product.querySelector('h3').textContent;
      const productPrice = parseFloat(product.querySelector('p').textContent.substring(1));

      const cartItem = document.createElement('li');
      cartItem.textContent = productName + ' - $' + productPrice.toFixed(2);
      cartItems.appendChild(cartItem);

      cartTotal += productPrice;
      total.textContent = 'Total: $' + cartTotal.toFixed(2);
    });
  });
});
