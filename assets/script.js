import { flashSalesProducts } from './products.js';

const productContainer = document.querySelector('.product-grid');

flashSalesProducts.forEach(product => {
    const productHTML = `
                <div class="product">
                <span class="discount">-${product.discount}</span>
                <div class="product-img-content">
                    <img src="${}">
                </div>
                <div class="product-content">
                    <h3>HAVIT HV-G92 Gamepad</h3>
                    <p class="price">$120 <span class="old-price">$160</span></p>
                    <p class="rating">⭐⭐⭐⭐ (88)</p>
                </div>
            </div>
    `;
    productContainer.innerHTML += productHTML;
});
