import { products } from '../data/products.js'

export function ProductGrid() {
  return `
    <section class="container products-section">
      <div class="section-header">
        <h2 class="section-title">Seçilmiş Ətirlər</h2>
        <p>Sizə özəl hazırlanmış imza qoxularımızı kəşf edin.</p>
      </div>
      
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
    </section>
  `
}
