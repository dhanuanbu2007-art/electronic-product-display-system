/* ==========================================================================
   ELECTRONIC PRODUCT DISPLAY SYSTEM - VANILLA JAVASCRIPT APP ENGINE
   ========================================================================== */

// --- 1. Master Product Database ---
const PRODUCTS_DATA = [
  {
    id: "phone-1",
    name: "Titanium Pro Max 5G",
    category: "Smartphones",
    price: 1199,
    rating: 4.9,
    reviews: 142,
    inStock: true,
    stockCount: 18,
    image: "images/smartphone.svg",
    description: "Flagship 5G smartphone featuring an aerospace-grade titanium frame, advanced triple-lens camera system, and dynamic high-refresh AMOLED display.",
    specs: {
      "Display": "6.7-inch Super Retina XDR AMOLED (120Hz)",
      "Processor": "Next-Gen 3nm Octa-Core Chip",
      "RAM & Storage": "12GB RAM | 256GB NVMe Storage",
      "Camera System": "48MP Main + 12MP Ultra-Wide + 12MP Telephoto",
      "Battery Life": "5000 mAh with 45W Fast Charging",
      "Warranty": "1 Year Official Manufacturer Warranty"
    }
  },
  {
    id: "phone-2",
    name: "Galaxy Ultra Flip Z",
    category: "Smartphones",
    price: 999,
    rating: 4.7,
    reviews: 98,
    inStock: true,
    stockCount: 12,
    image: "images/smartphone2.svg",
    description: "Revolutionary foldable smartphone with zero-gap hinge technology, dual AMOLED screens, and versatile FlexCam photography.",
    specs: {
      "Display": "6.8-inch Foldable Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 3 Leading Edition",
      "RAM & Storage": "8GB RAM | 512GB Storage",
      "Camera": "50MP Dual Rear + 12MP Front",
      "Battery": "4400 mAh Dual-Cell",
      "Warranty": "1 Year Screen Care & Warranty"
    }
  },
  {
    id: "laptop-1",
    name: "CyberBlade Pro M3 Laptop",
    category: "Laptops",
    price: 1899,
    rating: 4.9,
    reviews: 210,
    inStock: true,
    stockCount: 9,
    image: "images/laptop.svg",
    description: "Ultra-sleek workstation designed for creative professionals, developers, and power users. Extraordinary battery efficiency and liquid Retina clarity.",
    specs: {
      "Processor": "M3 Pro 12-Core CPU with 18-Core GPU",
      "Memory": "18GB Unified Memory",
      "Storage": "1TB Superfast PCIe SSD",
      "Display": "16.2-inch Liquid Retina XDR (3024x1964)",
      "Battery": "Up to 22 hours video playback",
      "Weight": "2.14 kg"
    }
  },
  {
    id: "laptop-2",
    name: "Starlight RTX 4080 Gaming Laptop",
    category: "Laptops",
    price: 2299,
    rating: 4.8,
    reviews: 85,
    inStock: true,
    stockCount: 5,
    image: "images/laptop2.svg",
    description: "Uncompromised gaming performance with NVIDIA GeForce RTX 4080 graphics, vapor chamber cooling, and a high-refresh QHD+ 240Hz screen.",
    specs: {
      "Processor": "Intel Core i9-14900HX (24 Cores)",
      "Graphics": "NVIDIA GeForce RTX 4080 16GB GDDR6",
      "Memory": "32GB DDR5 5600MHz RAM",
      "Storage": "2TB M.2 NVMe Gen4 SSD",
      "Display": "16-inch QHD+ 240Hz 3ms G-SYNC",
      "Warranty": "2 Year Premium On-Site Care"
    }
  },
  {
    id: "hp-1",
    name: "Acoustic Shield ANC Headphones",
    category: "Headphones",
    price: 349,
    rating: 4.8,
    reviews: 320,
    inStock: true,
    stockCount: 25,
    image: "images/headphones.svg",
    description: "Industry-leading wireless noise canceling headphones with custom 40mm drivers, crystal-clear beamforming microphone, and 30-hour battery life.",
    specs: {
      "Noise Cancellation": "Dual-Processor Adaptive ANC",
      "Drivers": "40mm Carbon Fiber Composite Drivers",
      "Battery Life": "30 Hours (ANC On) / Quick Charge (3 mins = 3 hrs)",
      "Bluetooth": "Version 5.3 with LDAC Codec Support",
      "Weight": "250g Ultra Lightweight"
    }
  },
  {
    id: "hp-2",
    name: "Studio Pro Reference Headphones",
    category: "Headphones",
    price: 279,
    rating: 4.6,
    reviews: 115,
    inStock: true,
    stockCount: 14,
    image: "images/headphones2.svg",
    description: "Open-back studio reference headphones engineered for audiophile listening, music mixing, and spatial audio mastering.",
    specs: {
      "Acoustic Design": "Open-Back Circumaural",
      "Frequency Response": "10Hz - 40,000Hz",
      "Impedance": "32 Ohms (Easy Drive)",
      "Cable": "3m Detachable Oxygen-Free Copper Cable",
      "Included": "6.35mm Gold-Plated Adapter & Hard Case"
    }
  },
  {
    id: "sw-1",
    name: "Apex Ultra Sports Watch",
    category: "Smart Watches",
    price: 449,
    rating: 4.9,
    reviews: 175,
    inStock: true,
    stockCount: 15,
    image: "images/smartwatch.svg",
    description: "Rugged multi-sport GPS smartwatch built with titanium casing, sapphire display lens, and emergency satellite SOS connectivity.",
    specs: {
      "Display": "1.92-inch Sapphire Crystal Display (2000 nits)",
      "Water Resistance": "100 Meters Water Resistant (EN13319 Diver Standard)",
      "GPS": "Dual-Frequency Precision L1 + L5 GPS",
      "Health Sensors": "ECG, Blood Oxygen, Heart Rate, Temperature",
      "Battery": "Up to 36 Hours Normal / 72 Hours Low Power"
    }
  },
  {
    id: "sw-2",
    name: "FitPulse Slim Smartwatch",
    category: "Smart Watches",
    price: 199,
    rating: 4.5,
    reviews: 92,
    inStock: true,
    stockCount: 20,
    image: "images/smartwatch2.svg",
    description: "Sleek, lightweight fitness smartwatch tracking 100+ workout modes, sleep staging, and daily wellness metrics with an AMOLED touchscreen.",
    specs: {
      "Display": "1.4-inch Curved AMOLED Always-On Display",
      "Fitness Tracking": "100+ Sport Modes & Auto Exercise Detection",
      "Battery": "Up to 7 Days Single Charge",
      "Compatibility": "iOS 14.0+ & Android 8.0+",
      "Weight": "32g Featherlight"
    }
  },
  {
    id: "tab-1",
    name: "VisionPad Pro 12.9 Tablet",
    category: "Tablets",
    price: 1099,
    rating: 4.9,
    reviews: 160,
    inStock: true,
    stockCount: 11,
    image: "images/tablet.svg",
    description: "High-performance tablet equipped with Liquid Retina XDR display, M2 processing speed, and precision stylus pen drawing responsiveness.",
    specs: {
      "Screen": "12.9-inch Liquid Retina XDR Mini-LED (1600 nits peak)",
      "Processor": "Octa-Core M2 Processing Engine",
      "Storage": "256GB High-Speed Flash Storage",
      "Cameras": "12MP Wide + 10MP Ultra-Wide + LiDAR Scanner",
      "Pencil Support": "Magnetic Charging Stylus Pen Compatible"
    }
  },
  {
    id: "tab-2",
    name: "Slate Go 11 Compact Tablet",
    category: "Tablets",
    price: 499,
    rating: 4.4,
    reviews: 74,
    inStock: true,
    stockCount: 16,
    image: "images/tablet2.svg",
    description: "Versatile entertainment and study tablet featuring Quad stereo speakers, all-day battery, and multi-window multitasking.",
    specs: {
      "Display": "11-inch 2K IPS Screen (90Hz)",
      "Audio": "Quad Speakers with Dolby Atmos",
      "RAM & Storage": "6GB RAM | 128GB Expandable microSD",
      "Battery": "7700 mAh with 22.5W Fast Charging",
      "Weight": "460g"
    }
  },
  {
    id: "cam-1",
    name: "Lumina FX 8K Mirrorless Camera",
    category: "Cameras",
    price: 2499,
    rating: 4.9,
    reviews: 64,
    inStock: true,
    stockCount: 6,
    image: "images/camera.svg",
    description: "Professional full-frame mirrorless camera capturing stunning 45MP still images and internal uncompressed 8K 30fps RAW video.",
    specs: {
      "Sensor": "45.7MP Full-Frame Back-Illuminated CMOS",
      "Video Recording": "8K 30p / 4K 120p 10-Bit N-RAW",
      "Autofocus": "AI Deep-Learning Subject Detection AF",
      "Stabilization": "5-Axis In-Body Image Stabilization (8 Stops)",
      "Card Slots": "Dual CFexpress Type B / SD UHS-II"
    }
  },
  {
    id: "cam-2",
    name: "Action Cam 4K Ultra",
    category: "Cameras",
    price: 349,
    rating: 4.6,
    reviews: 130,
    inStock: true,
    stockCount: 22,
    image: "images/camera2.svg",
    description: "Waterproof, shockproof action camera recording stabilized 4K 60fps footage with dual color screens for easy vlogging.",
    specs: {
      "Video Quality": "4K at 60fps / 1080p at 240fps Slow Motion",
      "Waterproofing": "Waterproof up to 10m (33ft) without housing",
      "Screens": "2.25-inch Rear Touchscreen + 1.4-inch Front Screen",
      "Battery": "1770 mAh Extreme Temp Resistant",
      "Weight": "145g"
    }
  },
  {
    id: "spk-1",
    name: "BoomSphere 360 Speaker",
    category: "Speakers",
    price: 179,
    rating: 4.7,
    reviews: 188,
    inStock: true,
    stockCount: 30,
    image: "images/speaker.svg",
    description: "Portable Bluetooth speaker producing omnidirectional 360-degree room-filling audio, punchy bass, and customizable RGB ambient lighting.",
    specs: {
      "Audio Output": "40W RMS Stereo Drivers + Dual Passive Radiators",
      "Battery": "20 Hours Continuous Playtime",
      "Durability Rating": "IP67 Dustproof & Waterproof (Floats in water)",
      "Wireless": "Bluetooth 5.3 with PartyBoost Multi-Speaker Sync",
      "Charging": "USB-C Reverse Power Bank Charging"
    }
  },
  {
    id: "spk-2",
    name: "Harmonix Soundbar & Sub",
    category: "Speakers",
    price: 329,
    rating: 4.8,
    reviews: 95,
    inStock: true,
    stockCount: 8,
    image: "images/speaker2.svg",
    description: "Home theater soundbar system with wireless subwoofer, Dolby Atmos spatial sound, and seamless HDMI eARC connectivity.",
    specs: {
      "System Output": "300W Peak System Power",
      "Channel Layout": "3.1 Dedicated Center Voice Channel",
      "Audio Formats": "Dolby Atmos / DTS:X Supported",
      "Inputs": "HDMI eARC, Optical, USB, Bluetooth 5.2"
    }
  },
  {
    id: "gm-1",
    name: "ViperSpeed Wireless Gaming Mouse",
    category: "Gaming Accessories",
    price: 129,
    rating: 4.9,
    reviews: 240,
    inStock: true,
    stockCount: 19,
    image: "images/gaming.svg",
    description: "Ultra-lightweight 59g wireless esports gaming mouse with 30,000 DPI optical sensor, zero motion latency, and 90-hour battery life.",
    specs: {
      "Weight": "59 Grams Ultra Light Design",
      "Sensor": "Focus Pro 30K Optical Sensor",
      "Switches": "Gen-3 Optical Mouse Switches (90M Clicks)",
      "Polling Rate": "4000Hz HyperPolling Wireless Capable",
      "Battery": "Up to 90 Hours Continuous Gameplay"
    }
  },
  {
    id: "gm-2",
    name: "ApexRGB Mechanical Keyboard",
    category: "Gaming Accessories",
    price: 159,
    rating: 4.8,
    reviews: 182,
    inStock: true,
    stockCount: 14,
    image: "images/gaming2.svg",
    description: "Tenkeyless mechanical gaming keyboard with hot-swappable tactile switches, sound-dampening foam, and per-key RGB backlighting.",
    specs: {
      "Form Factor": "Tenkeyless (80% TKL)",
      "Switches": "Pre-lubed Tactile Mechanical Switches (Hot-Swappable)",
      "Keycaps": "Double-shot PBT Keycaps (Shine-resistant)",
      "Lighting": "Per-Key RGB Lighting with Dynamic Animations",
      "Connection": "Detachable Braided USB-C Cable"
    }
  }
];

// --- 2. Application State ---
let state = {
  cart: JSON.parse(localStorage.getItem('techpulse_cart')) || [],
  activeCategory: 'All',
  searchQuery: '',
  sortBy: 'featured'
};

// --- 3. DOM Elements Cache ---
const elements = {
  productGrid: document.getElementById('productGrid'),
  categoryFilters: document.getElementById('categoryFilters'),
  categorySelect: document.getElementById('categorySelect'),
  searchInput: document.getElementById('searchInput'),
  sortSelect: document.getElementById('sortSelect'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),
  productCount: document.getElementById('productCount'),
  cartBtn: document.getElementById('cartBtn'),
  cartBadge: document.getElementById('cartBadge'),
  cartDrawerOverlay: document.getElementById('cartDrawerOverlay'),
  cartCloseBtn: document.getElementById('cartCloseBtn'),
  cartItemsList: document.getElementById('cartItemsList'),
  cartTotalPrice: document.getElementById('cartTotalPrice'),
  clearCartBtn: document.getElementById('clearCartBtn'),
  checkoutBtn: document.getElementById('checkoutBtn'),
  modalOverlay: document.getElementById('modalOverlay'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  modalBody: document.getElementById('modalBody'),
  toastContainer: document.getElementById('toastContainer'),
  mobileNavToggle: document.getElementById('mobileNavToggle'),
  navLinks: document.getElementById('navLinks')
};

// --- 4. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // Parse URL query params if user navigated from index.html search or category links
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  const searchParam = urlParams.get('search');

  if (catParam) state.activeCategory = catParam;
  if (searchParam) {
    state.searchQuery = searchParam;
    if (elements.searchInput) elements.searchInput.value = searchParam;
  }

  updateCartBadge();
  setupEventListeners();

  // If on pages with Product Grid
  if (elements.productGrid) {
    renderCategoryFilters();
    renderProducts();
  }

  // Populate hero stats if present
  const totalProdStat = document.getElementById('statTotalProducts');
  if (totalProdStat) totalProdStat.textContent = PRODUCTS_DATA.length + "+";
}

// --- 5. Filtering & Data Logic ---
function getFilteredProducts() {
  return PRODUCTS_DATA.filter(product => {
    const matchesCategory = state.activeCategory === 'All' || product.category === state.activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (state.sortBy === 'price-low') return a.price - b.price;
    if (state.sortBy === 'price-high') return b.price - a.price;
    if (state.sortBy === 'rating') return b.rating - a.rating;
    if (state.sortBy === 'name-az') return a.name.localeCompare(b.name);
    return 0; // default featured order
  });
}

// --- 6. Render Product Grid & Categories ---
function renderProducts() {
  if (!elements.productGrid) return;

  const filtered = getFilteredProducts();

  // Update count text
  if (elements.productCount) {
    elements.productCount.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} products`;
  }

  if (filtered.length === 0) {
    elements.productGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">No Electronic Products Found</h3>
        <p class="empty-text">No products matched "${state.searchQuery}" in category "${state.activeCategory}". Try adjusting your filters.</p>
        <button class="btn btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  elements.productGrid.innerHTML = filtered.map(product => `
    <div class="product-card">
      <div class="card-image-wrapper">
        <span class="category-tag">${product.category}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="card-body">
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating">
          ★ ${product.rating.toFixed(1)} <span class="rating-count">(${product.reviews} reviews)</span>
        </div>
        <p class="product-desc">${product.description}</p>
        <div class="card-footer">
          <div class="product-price">$${product.price.toLocaleString()}</div>
          <div class="card-actions">
            <button class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;" onclick="openProductModal('${product.id}')">
              Details
            </button>
            <button class="btn-icon" title="Add to Cart" onclick="addToCart('${product.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCategoryFilters() {
  const categories = ['All', 'Smartphones', 'Laptops', 'Headphones', 'Smart Watches', 'Tablets', 'Cameras', 'Speakers', 'Gaming Accessories'];

  // Horizontal Category Pill Bar
  if (elements.categoryFilters) {
    elements.categoryFilters.innerHTML = categories.map(cat => `
      <button class="category-pill ${state.activeCategory === cat ? 'active' : ''}" onclick="setCategory('${cat}')">
        ${cat}
      </button>
    `).join('');
  }

  // Dropdown filter selector (if present)
  if (elements.categorySelect) {
    elements.categorySelect.innerHTML = categories.map(cat => `
      <option value="${cat}" ${state.activeCategory === cat ? 'selected' : ''}>${cat}</option>
    `).join('');
  }
}

function setCategory(category) {
  state.activeCategory = category;
  renderCategoryFilters();
  renderProducts();
}

function resetAllFilters() {
  state.activeCategory = 'All';
  state.searchQuery = '';
  state.sortBy = 'featured';

  if (elements.searchInput) elements.searchInput.value = '';
  if (elements.sortSelect) elements.sortSelect.value = 'featured';

  renderCategoryFilters();
  renderProducts();
  showToast('Filters reset to default');
}

// --- 7. Product Modal Controller ---
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product || !elements.modalOverlay || !elements.modalBody) return;

  const specsHTML = Object.entries(product.specs).map(([key, val]) => `
    <li><span class="specs-key">${key}:</span> <strong>${val}</strong></li>
  `).join('');

  elements.modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-container">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="modal-details">
        <span class="category-tag">${product.category}</span>
        <h2 style="font-size: 1.75rem; margin-top: 0.25rem;">${product.name}</h2>
        <div class="product-rating">
          ★ ${product.rating.toFixed(1)} <span class="rating-count">(${product.reviews} verified buyer reviews)</span>
        </div>
        <div class="stock-badge in-stock">✓ In Stock (${product.stockCount} units available)</div>
        <div class="product-price" style="font-size: 2rem; margin: 0.5rem 0;">$${product.price.toLocaleString()}</div>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${product.description}</p>
        
        <div style="margin-top: 1rem;">
          <h4 class="specs-title">Technical Specifications</h4>
          <ul class="specs-list">
            ${specsHTML}
          </ul>
        </div>
        
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
          <button class="btn btn-primary" style="flex: 1;" onclick="addToCart('${product.id}'); closeModal();">
            🛒 Add to Cart - $${product.price.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  `;

  elements.modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (elements.modalOverlay) {
    elements.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- 8. Cart Logic & Persistence ---
function addToCart(productId) {
  const existingItem = state.cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ id: productId, quantity: 1 });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  showToast(`Added "${prod ? prod.name : 'Item'}" to Cart!`);
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast('Item removed from cart');
}

function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast('Shopping cart cleared');
}

function saveCart() {
  localStorage.setItem('techpulse_cart', JSON.stringify(state.cart));
}

function updateCartBadge() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (elements.cartBadge) {
    elements.cartBadge.textContent = totalCount;
    elements.cartBadge.style.display = totalCount > 0 ? 'flex' : 'none';
  }
}

function renderCartDrawer() {
  if (!elements.cartItemsList) return;

  if (state.cart.length === 0) {
    elements.cartItemsList.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛒</div>
        <p style="font-size: 1.1rem; color: var(--text-main); font-weight: 600;">Your Cart is Empty</p>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">Browse products and add items to your cart.</p>
      </div>
    `;
    if (elements.cartTotalPrice) elements.cartTotalPrice.textContent = '$0.00';
    return;
  }

  let total = 0;
  elements.cartItemsList.innerHTML = state.cart.map(cartItem => {
    const product = PRODUCTS_DATA.find(p => p.id === cartItem.id);
    if (!product) return '';
    const itemTotal = product.price * cartItem.quantity;
    total += itemTotal;

    return `
      <div class="cart-item">
        <img src="${product.image}" class="cart-item-img" alt="${product.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-price">$${product.price.toLocaleString()}</div>
          <div class="cart-qty-ctrl">
            <button class="qty-btn" onclick="updateCartQuantity('${product.id}', -1)">-</button>
            <span class="qty-val">${cartItem.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity('${product.id}', 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" title="Remove item" onclick="removeFromCart('${product.id}')">✕</button>
      </div>
    `;
  }).join('');

  if (elements.cartTotalPrice) {
    elements.cartTotalPrice.textContent = `$${total.toLocaleString()}`;
  }
}

function toggleCartDrawer(open) {
  if (!elements.cartDrawerOverlay) return;
  if (open) {
    renderCartDrawer();
    elements.cartDrawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    elements.cartDrawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- 9. Toast Notification System ---
function showToast(message) {
  if (!elements.toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>⚡</span> ${message}`;

  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- 10. Global Event Listeners Setup ---
function setupEventListeners() {
  // Mobile Nav Toggle
  if (elements.mobileNavToggle && elements.navLinks) {
    elements.mobileNavToggle.addEventListener('click', () => {
      elements.navLinks.classList.toggle('mobile-open');
    });
  }

  // Live Search Input
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Category Select Dropdown
  if (elements.categorySelect) {
    elements.categorySelect.addEventListener('change', (e) => {
      setCategory(e.target.value);
    });
  }

  // Sort Select Dropdown
  if (elements.sortSelect) {
    elements.sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Reset Filters Button
  if (elements.resetFiltersBtn) {
    elements.resetFiltersBtn.addEventListener('click', resetAllFilters);
  }

  // Cart Drawer Toggles
  if (elements.cartBtn) {
    elements.cartBtn.addEventListener('click', () => toggleCartDrawer(true));
  }
  if (elements.cartCloseBtn) {
    elements.cartCloseBtn.addEventListener('click', () => toggleCartDrawer(false));
  }
  if (elements.cartDrawerOverlay) {
    elements.cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === elements.cartDrawerOverlay) toggleCartDrawer(false);
    });
  }

  // Clear Cart Button
  if (elements.clearCartBtn) {
    elements.clearCartBtn.addEventListener('click', clearCart);
  }

  // Checkout Button Simulation
  if (elements.checkoutBtn) {
    elements.checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Your cart is empty!');
        return;
      }
      alert('⚡ Order Checkout Simulation\n\nThank you for exploring the Electronic Product Display System! Your order request has been received.');
      clearCart();
      toggleCartDrawer(false);
    });
  }

  // Modal Close Events
  if (elements.modalCloseBtn) {
    elements.modalCloseBtn.addEventListener('click', closeModal);
  }
  if (elements.modalOverlay) {
    elements.modalOverlay.addEventListener('click', (e) => {
      if (e.target === elements.modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      toggleCartDrawer(false);
    }
  });
}
