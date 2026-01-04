import { products } from '../data/products.js'

export function Categories() {
    return `
    <div class="container" style="padding: 8rem 0;">
      <h1 class="section-title" style="text-align: center; margin-bottom: 4rem;">Kolleksiyalar</h1>
      
      <div class="product-grid">
        ${products.map(product => `
           <div class="product-card" onclick="window.location.hash = '#product/${product.id}'">
            <div class="product-image-container">
              <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
              <h3 class="product-name">${product.name}</h3>
              <span class="product-price">${product.price} ₼</span>
              <button class="add-to-cart" data-id="${product.id}" onclick="event.stopPropagation(); addToCart(${product.id})">Səbətə At</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `
}
