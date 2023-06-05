import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data.products);
    };
    getProducts();
  }, []);

  localStorage.setItem("products", JSON.stringify(products));

  return (
    <div className="home-page-container">
      <h3>Why leave the comfort of your home when you can get it all in one click? </h3>
      <div className="home-background-image">
        <img src="/assets/aside/pexels-andrea-piacquadio-3756345.jpg" alt="home display" className="first"/>
        <img src="/assets/aside/pexels-kindel-media-6994177.jpg" alt="home display" className="second"/>
      </div>
      <h3 className="second-h3">Make your selection from our various categories</h3>
      <div className="categories">
        <div className="phones-and-tablets">
          <Link to="/products/phones">
              <img src="/assets/phones-and-tablets/iphone-13-pro.jpg" alt="phones and tablets" />
              <p>Phones and Tablets</p>
          </Link>
        </div>
        <div className="electronics">
          <Link to="/products/electronics">
              <img src="/assets/electronics/Hisense.jpg" alt="electronics" />
              <p>Electronics</p>
          </Link>
        </div>
        <div className="computing">
          <Link to="/products/computing">
              <img src="/assets/computing/Apple-MacBook-Pro-2022.jpg" alt="computing devices" />
              <p>Computing</p>
          </Link>
        </div>
        <div className="grocery">
          <Link to="/products">
              <img src="/assets/grocery/Big-Bull.jpg" alt="grocery" />
              <p>Grocery</p>
          </Link>
        </div>
      </div>
    </div>
  );
};