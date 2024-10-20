import React, { useState, useEffect, createContext, useContext } from 'react';
import productsData from './assets/products.json'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Create the CartContext
const CartContext = createContext();

// CartProvider Component
const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const initialProducts = productsData.products.map(product => ({
      ...product,
      quantity: 1,
    }));
    setProducts(initialProducts);
    calculateTotals(initialProducts);
  }, []);

  const calculateTotals = (products) => {
    const totalQty = products.reduce((sum, product) => sum + product.quantity, 0);
    const totalAmt = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    setTotalQuantity(totalQty);
    setTotalAmount(totalAmt.toFixed(2));
  };

  const updateQuantity = (id, amount) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        const newQuantity = product.quantity + amount;
        return { ...product, quantity: Math.max(newQuantity, 1) }; // Ensure quantity doesn't drop below 1
      }
      return product;
    });
    setProducts(updatedProducts);
    calculateTotals(updatedProducts);
  };

  return (
    <CartContext.Provider value={{ products, totalQuantity, totalAmount, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// ShoppingCart Component
const ShoppingCart = () => {
  const { products, totalQuantity, totalAmount, updateQuantity } = useContext(CartContext);

  return (
    <>
      <div className="row mb-4">
        <div className="col-md-6">
          <h4>Total Items: {totalQuantity}</h4>
        </div>
        <div className="col-md-6 text-md-end">
          <h4>Total Amount: ₹{totalAmount}</h4>
        </div>
      </div>

      <div className="row">
        {products.map(product => (
          <div className="col-md-6 col-lg-4 mb-4" key={product.id}>
            <div className="card small-card h-100">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-primary">₹{product.price}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button 
                      className="btn btn-outline-secondary" 
                      onClick={() => updateQuantity(product.id, -1)}>-</button>
                    <span className="mx-3">{product.quantity}</span>
                    <button 
                      className="btn btn-outline-secondary" 
                      onClick={() => updateQuantity(product.id, 1)}>+</button>
                  </div>
                  <p className="text-muted mb-0">Total: ₹{(product.price * product.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// App Component
function App() {
  return (
    <CartProvider>
      <div className="container mt-5">
        <h2 className="text-center text-primary mb-4">Shopping Cart</h2>
        <ShoppingCart />
      </div>
    </CartProvider>
  );
}

export default App;
