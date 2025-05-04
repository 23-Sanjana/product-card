// Example product data
const products = [
    {
      name: 'NovaX Smartwatch',
      image: 'images/pro.webp', // Placeholder image
      description: 'Track your fitness, monitor your health, and stay connected.',
      features: ['💓 Heart & Sleep Monitor', '🔋 7-Day Battery', '💧 IP68 Waterproof'],
      price: '$149.99',
      originalPrice: '$199.99'
    },
    {
      name: 'FitMax Smartband',
      image: 'images/pro2.jpg', // Placeholder image
      description: 'A sleek band for fitness enthusiasts with cutting-edge health tracking.',
      features: ['💪 Fitness Tracker', '🔋 10-Day Battery', '💦 Waterproof'],
      price: '$89.99',
      originalPrice: '$129.99'
    },
    {
      name: 'TechPro Wireless Earbuds',
      image: 'images/pro3.jpeg', // Placeholder image
      description: 'Enjoy true wireless freedom with immersive sound quality.',
      features: ['🎶 High-Quality Sound', '🔋 8 Hours Playtime', '🌐 Bluetooth 5.0'],
      price: '$99.99',
      originalPrice: '$149.99'
    }
  ];
  
  // Populate product cards dynamically
  function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
  
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <div class="card-inner">
          <!-- Front -->
          <div class="card-front">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price} <span class="strike">${product.originalPrice}</span></p>
            <button class="flip-btn">See More</button>
          </div>
          <!-- Back -->
          <div class="card-back">
            <h3>Features</h3>
            <ul>
              ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <p>${product.description}</p>
            <button class="add-to-cart-btn">🛒 Add to Cart</button>
            <button class="flip-btn">Go Back</button>
          </div>
        </div>
      `;
      productGrid.appendChild(card);
    });
  }
  
  // Show toast notification when adding to cart
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2000);
    }
  });
  
  // Filter products based on search input
  function filterProducts() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchQuery) ||
      product.features.some(feature => feature.toLowerCase().includes(searchQuery))
    );
    
    products.length = 0;
    products.push(...filteredProducts);
    loadProducts();
  }
  
  // Initialize product cards
  loadProducts();
  