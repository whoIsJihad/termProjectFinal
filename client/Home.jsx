import React from 'react';
import "./HomePage.css";
const HomePage = () => {
    return (
      <div>
        <header>
          <h1>Welcome to Our E-Commerce Store</h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
  
        <main>
          <section className="featured-products">
            <h2>Featured Products</h2>
            {/* Display featured products */}
            <div className="product-card">
              <img src="product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Description of Product 1.</p>
              <button>Add to Cart</button>
            </div>
  
            <div className="product-card">
              <img src="product2.jpg" alt="Product 2" />
              <h3>Product 2</h3>
              <p>Description of Product 2.</p>
              <button>Add to Cart</button>
            </div>
  
            {/* Add more featured products as needed */}
          </section>
  
          <section className="special-offers">
            <h2>Special Offers</h2>
            {/* Display special offers */}
            <div className="offer-card">
              <h3>Special Offer 1</h3>
              <p>Details of Special Offer 1.</p>
            </div>
  
            <div className="offer-card">
              <h3>Special Offer 2</h3>
              <p>Details of Special Offer 2.</p>
            </div>
  
            {/* Add more special offers as needed */}
          </section>
        </main>
  
        <footer>
          <p>&copy; 2024 Your E-Commerce Store. All rights reserved.</p>
        </footer>
      </div>
    );
  };

  export default HomePage;