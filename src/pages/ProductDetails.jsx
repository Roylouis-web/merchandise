import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const param = useParams();
  const products = JSON.parse(localStorage.getItem("products"));
  const item = products.filter(product => product.id === param.id)[0];
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  const email = localStorage.getItem("email");
  
  const increment = () => {
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    setQuantity(prev => prev - 1);
  };

  const addToCart = () => {
    if (!isLoggedIn) {
      return navigate("/login?message=You have to log in first!");
    }
  };

  return (
    <div 
      className="product-details"
      style={{
        marginLeft: '30px'
      }}
      >
       <img 
        src={item.imageUrl} 
        alt="item"
      />
       <h3 className="product-price">₦{item.price.toLocaleString()}</h3>
       <p className="product-name">{item.name}</p>
        <details>
            <summary>Details</summary>
            <p>{item.description}</p>
        </details>
        <div className="q-btn-container">
          <button disabled={ quantity === 1 ? true : false } onClick={decrement}>-</button>
          <p>{quantity }</p>
          <button onClick={increment}>+</button>
        </div>
        <button className="cart-btn" onClick={addToCart}>Add to cart</button>
    </div>
  );
}