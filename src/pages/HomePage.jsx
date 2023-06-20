// Homepage component that renders the landing page of the web app

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <h4>Why leave the comfort of your home when you can get it all in one click?</h4>
      <div className="homepage-images">
        <img src="assets\aside\pexels-andrea-piacquadio-3756345.jpg" alt="" />
        <img src="assets\aside\pexels-kindel-media-6994177.jpg" alt="" />
      </div>
      <h4>Make your selection from our various categories</h4>

      <nav className="product-category-navbar">
        <div>
            <Link to='products/phones-and-tablets'>
                <img src="\assets\phones-and-tablets\iphone-13-pro.jpg" alt="phone" />
                <p>Phones and Tablets</p>
            </Link>
        </div>
        <div>
            <Link to="products/electronics">
                <img src="\assets\electronics\Hisense.jpg" alt="television" />
                <p>Electronics</p>
            </Link>
        </div>
        <div>
            <Link to="products/computing">
                <img src="\assets\computing\Apple-MacBook-Pro-2022.jpg" alt="Laptop" />
               <p> Computing</p>
            </Link>
        </div>
        <div>
            <Link to="products">
                <img src="\assets\grocery\Big-Bull.jpg" alt="" />
                <p>Grocery</p>
            </Link>
        </div>
      </nav>
    </div>
  );
}
