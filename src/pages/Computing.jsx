import { Link } from 'react-router-dom';

export default function Computing() {
    const products = JSON.parse(localStorage.getItem("products"));
    const grocery = products.filter(product => product.category === "computing");
    const groceryComponents = grocery.map(item => {
      return (
        <Link key={ item.id } to={ item.id } className='grocery-link'>
          <div className="grocery">
              <img src={ item.imageUrl } alt="grocery item" />
              <h3>₦{ item.price.toLocaleString() }</h3>
              <p>{ item.name }</p>
              <p style={{
                color: 'gold',
                fontSize: '22px'
              }}
              >&#9733;&#9733;&#9733;&#9733;&#9733;</p>
          </div>
        </Link>
      );
    });
    return (
      <div className="grocery-container">
        { groceryComponents }
      </div>
    );
  };