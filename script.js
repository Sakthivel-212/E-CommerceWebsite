
document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartItems = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartItems++;
            cartCountElement.textContent = cartItems;
            
            const productName = button.closest('.product-card').querySelector('h3').textContent;
            alert(`${productName} added to cart!`);
        });
    });
});