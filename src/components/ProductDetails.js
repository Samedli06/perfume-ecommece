import { products } from '../data/products.js'

export function ProductDetails(id) {
    const product = products.find(p => p.id == id);
    if (!product) return `<div class="container" style="padding: 10rem 0; text-align: center;">Məhsul tapılmadı.</div>`;

    return `
    <div class="container" style="padding: 8rem 0;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
        <div style="background: var(--color-light-gray); padding: 2rem;">
          <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; display: block;">
        </div>
        <div>
          <span style="display: block; color: var(--color-accent); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 2px;">${product.category}</span>
          <h1 style="font-size: 3rem; margin-bottom: 1rem; font-family: var(--font-display);">${product.name}</h1>
          <p style="font-size: 1.5rem; margin-bottom: 2rem; font-family: var(--font-serif);">${product.price} ₼</p>
          <p style="margin-bottom: 3rem; font-size: 1.1rem; opacity: 0.8;">${product.description}</p>
          
          <button class="btn" onclick="addToCart(${product.id})">Səbətə Əlavə Et</button>
        </div>
      </div>
    </div>
  `
}
