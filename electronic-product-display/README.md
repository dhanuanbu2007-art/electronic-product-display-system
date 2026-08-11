# Electronic Product Display System 📱💻🎧

> **A Modern Web Technology Mini Project built with pure HTML5, CSS3, and Vanilla JavaScript.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-Responsive-brightgreen?style=for-the-badge)

---

## 📌 Project Overview

The **Electronic Product Display System** is an interactive, responsive web application designed for browsing, searching, filtering, and inspecting consumer electronic products. Built as a college **Web Technology Mini Project**, it highlights clean frontend design principles, accessible modal dialogs, glassmorphic UI aesthetics, dynamic DOM manipulation, and state persistence using standard web web standards without relying on heavy frameworks like React or Vue.

---

## ✨ Key Features

- 🖥️ **Interactive Hero & Search Bar**: Quick search functionality allowing real-time product filtering right from the landing page.
- 📱 **Multi-Category Product Filtering**: Easily filter products across 8 major electronic categories:
  - Smartphones
  - Laptops
  - Headphones
  - Smart Watches
  - Tablets
  - Cameras
  - Speakers
  - Gaming Accessories
- 🔍 **Live Real-Time Keyword Search**: Dynamic search matching product titles, descriptions, and categories without page reloads.
- ↕️ **Multi-Option Sorting**: Sort products by:
  - Featured items
  - Price: Low to High
  - Price: High to Low
  - Highest Customer Rating
  - Alphabetical (A - Z)
- 📋 **Detailed Product Specifications Modal**: Click *"View Details"* on any product card to launch a full-screen glassmorphic modal displaying complete hardware specifications, stock availability, and buyer ratings.
- 🛒 **Shopping Cart & LocalStorage Sync**:
  - Live animated cart badge counter in the top navigation bar.
  - Slide-out side cart drawer with item quantity modifiers (`+` / `-`) and item removal.
  - Automated subtotal and total price computation.
  - Cart state persists across page refreshes and browser tabs using `localStorage`.
  - Simulated Checkout workflow with toast notification alerts.
- 📱 **Fully Responsive Layout**: Optimized for all device viewports including Desktop (1440px+), Tablets (768px), and Mobile devices (320px+).

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic markup (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) |
| **CSS3** | Glassmorphism, CSS Custom Variables, Flexbox, CSS Grid, animations |
| **Vanilla JavaScript (ES6+)** | Dynamic DOM rendering, array filtering/sorting, local storage, modal management |
| **Vector SVG** | Scalable offline product illustrations & branding assets |
| **Google Fonts** | Modern typography using *Outfit* & *Inter* fonts |

---

## 📂 Project Structure

```text
electronic-product-display/
│
├── index.html          # Main landing page with Hero, Quick Search, Featured Categories & About section
├── products.html       # Full electronic product catalog page with multi-filtering & sorting controls
├── style.css           # Central CSS design system, glassmorphism tokens, grid layouts, and animations
├── script.js           # Vanilla JavaScript engine: dataset, filters, cart logic, modal & toast controller
├── images/             # Vector SVG artwork assets for products, logo, and icons
│   ├── logo.svg
│   ├── smartphone.svg
│   ├── smartphone2.svg
│   ├── laptop.svg
│   ├── laptop2.svg
│   ├── headphones.svg
│   ├── headphones2.svg
│   ├── smartwatch.svg
│   ├── smartwatch2.svg
│   ├── tablet.svg
│   ├── tablet2.svg
│   ├── camera.svg
│   ├── camera2.svg
│   ├── speaker.svg
│   ├── speaker2.svg
│   ├── gaming.svg
│   └── gaming2.svg
└── README.md           # Professional project documentation and setup guide
```

---

## 🚀 How to Run the Project

No external server or build setup (npm/webpack) is required! You can run this project locally in any modern browser:

### Option 1: Direct File Opening
1. Clone or download the repository:
   ```bash
   git clone https://github.com/your-username/electronic-product-display.git
   ```
2. Navigate into the project directory:
   ```bash
   cd electronic-product-display
   ```
3. Open `index.html` directly in your favorite web browser (Chrome, Firefox, Edge, Safari).

### Option 2: Using Live Server (Recommended)
1. Open the `electronic-product-display` directory in VS Code or your preferred IDE.
2. Install the **Live Server** extension (if using VS Code).
3. Right-click `index.html` and select **"Open with Live Server"**.
4. Access the web app at `http://127.0.0.1:5500/index.html`.

---

## 🔮 Future Enhancements

- 💳 **Payment Gateway Integration**: Integrate Razorpay or Stripe test API for real-time checkout processing.
- 👤 **User Authentication**: Add client-side or backend user login/signup using Firebase or Node.js.
- ⭐ **Customer Reviews Submission**: Allow users to leave star ratings and text reviews saved to LocalStorage or a database.
- 🌓 **Light / Dark Mode Toggle**: Add a theme switcher for light and dark glassmorphic themes.
- 📦 **Order History Tracking**: Allow users to view past simulated orders.

---

## 🎓 Academic Info

- **Course**: Web Technology Mini Project
- **Topic**: Electronic Product Display System
- **Stack**: Pure HTML5 / CSS3 / Vanilla JS
