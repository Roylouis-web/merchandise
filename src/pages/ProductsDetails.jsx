import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ProductDetails() {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    (async () => {
      const data = await axios.get("/api/products");
      setProducts(data.data.products);
    })();

  }, []);

  const handleClick = () => {
    setMessage("Item successfully added to cart !");
    setTimeout(() => {
      setMessage("")
    }, 2000);
  };

  const add = () => {
    setQuantity(prev => prev + 1);
  };

  const subtract = () => {
    setQuantity(prev => prev - 1);
  };

  const product = products.find(item => item.id === id);
  return (
    product ? (
      <div className="product-details-container">
      <img src={ product.imageUrl } alt="item" />
      <h3>₦{ product.price.toLocaleString() }</h3>
      <details>
        <summary>Details</summary>
        <p>{ product.description }</p>
      </details>
      <div className="quantity">
        <button onClick={subtract} disabled={!quantity && true}>-</button>
        <h4>{ quantity }</h4>
        <button onClick={add}>+</button>
      </div>
      { message && <p style={{color: "green"}}>{ message }</p> }
      <button className="add-to-cart" onClick={handleClick}>Add to cart</button>
    </div>
    ): <p style={{marginTop: 150}}>Loading...</p>
  );
};