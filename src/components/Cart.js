import { products } from '../data/products.js'

export function Cart() {
    const cartIds = window.cart || [];
    const cartItems = cartIds.map(id => products.find(p => p.id === id)).filter(Boolean);
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    if (cartItems.length === 0) {
        return `
      <div class="container" style="padding: 10rem 0; text-align: center;">
        <h2 class="section-title">Səbətiniz Boşdur</h2>
        <a href="#categories" class="btn" style="margin-top: 2rem;">Alış-verişə Başla</a>
      </div>
    `
    }

    return `
    <div class="container" style="padding: 8rem 0; max-width: 800px;">
      <h1 class="section-title" style="margin-bottom: 3rem; text-align: center;">Səbət</h1>
      
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        ${cartItems.map(item => `
          <div style="display: flex; gap: 2rem; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 2rem;">
            <img src="${item.image}" style="width: 100px; height: 100px; object-fit: cover;" alt="${item.name}">
            <div style="flex-grow: 1;">
              <h3 style="font-family: var(--font-display); font-size: 1.2rem;">${item.name}</h3>
              <p style="color: var(--color-accent);">${item.price} ₼</p>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="margin-top: 3rem; text-align: right; border-top: 2px solid var(--color-text); padding-top: 2rem;">
        <div style="font-size: 1.5rem; font-family: var(--font-display); margin-bottom: 2rem;">
          Cəmi: ${total.toFixed(2)} ₼
        </div>
        <button class="btn">Sifarişi Rəsmiləşdir</button>
      </div>
    </div>
  `
}
