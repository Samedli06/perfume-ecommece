import './style.css'
import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { ProductGrid } from './components/ProductGrid.js'
import { Footer } from './components/Footer.js'
import { ProductDetails } from './components/ProductDetails.js'
import { Categories } from './components/Categories.js'
import { Cart } from './components/Cart.js'

// Simple Router Logic
const routes = {
  '/': Home,
  '/categories': CategoriesPage,
  '/cart': CartPage
};

function Home() {
  return `
    ${Hero()}
    ${ProductGrid()}
  `;
}

function CategoriesPage() {
  return Categories();
}

function CartPage() {
  return Cart();
}

// Router functionality
function router() {
  const app = document.querySelector('#app');
  let hash = window.location.hash.slice(1) || '/';

  // Handle layout
  let content = '';

  if (hash.startsWith('product/')) {
    const id = hash.split('/')[1];
    content = ProductDetails(id);
  } else if (hash === 'categories') {
    content = CategoriesPage();
  } else if (hash === 'cart') {
    content = CartPage();
  } else {
    content = Home();
  }

  app.innerHTML = `
    <div class="app-container">
      ${Header()}
      <main>
        ${content}
      </main>
      ${Footer()}
    </div>
  `;

  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Cart Logic
window.cart = JSON.parse(localStorage.getItem('cart')) || [];

window.addToCart = (id) => {
  window.cart.push(id);
  localStorage.setItem('cart', JSON.stringify(window.cart));

  // Header cart update visual
  const btn = document.querySelector(`button[data-id="${id}"]`);
  if (btn) {
    const originalText = btn.innerText;
    btn.innerText = "Səbətdə ✔";
    btn.classList.add("added");
    setTimeout(() => {
      btn.innerText = originalText;
      btn.classList.remove("added");
    }, 2000);
  }
  console.log("Added to cart", id);
  alert("Məhsul səbətə əlavə olundu!");
}
