import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Electronics() {
  //state called products which will be updated with all available products 
  const [products, setProducts] = useState([]);
  useState(() => {
    const getProducts = async () => {
      const products = await axios.get("/api/products");
      setProducts(products.data.products);
    };
    getProducts();
  }, []);

  //filter for electronics items
  const electronics = products.filter(product => product.category === "electronics");

  //create an array of electronics components
  const electronicsComponent = electronics.map(item => {
    return (
        <Link key={ item.id } to={ `../${item.id}` } className="product-details-link">
            <div className="product-container">
                <img src={ item.imageUrl } alt="merchandise" />
                <h3 className="product-price">{ `₦ ${ item.price.toLocaleString() }` }</h3>
                <p className="product-name">{ item.name }</p>
                <div className="rating">
                    <span style={{color: "gold"}}>&#9733;</span>
                    <span style={{color: "gold"}}>&#9733;</span>
                    <span style={{color: "gold"}}>&#9733;</span>
                    <span style={{color: "gold"}}>&#9733;</span>
                    <span style={{color: "gold"}}>&#9733;</span>
                </div>
            </div>
        </Link>
    );
  })
  return (
    <div className="products-container">
        { electronicsComponent }
    </div>
  );
};