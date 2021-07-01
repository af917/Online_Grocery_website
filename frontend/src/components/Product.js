import React from 'react';
import { Link } from 'react-router-dom';


const Product = (props) => {
  const { product } = props;
  return (
    <div key={product._id} className="items">
            <div className="images">
            <Link to={`/product/${product._id}`}><img src={product.image} className="item-image-size" alt={product.name}/></Link>
            </div>
            <div className="description">
                <b>{product.name}</b><br/>
                <div className="item-select">
                    Price :₹{product.price}
                </div>
                <label>Qty:</label>
                <select className="item-select">
                    <option>1kg</option>
                    <option>2kg</option>
                    <option>3kg</option>
                    <option>4kg</option>
                    <option>5kg</option>
                </select><br/>
                <button className="buynow-btn">Buy Now</button>
            </div>
        </div>
  )
}

export default Product;
